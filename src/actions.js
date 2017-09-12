import cache from 'js-cache';
import * as utils from './utils';


const timeout =  60000;



export const getRepos = function(user,{page,per_page},processing){
  return async function (dispatch){
    console.log(processing);
    let url =  `https://api.github.com/users/${user}/repos?page=${page}&per_page=${per_page}`;
    dispatch({type:'SET_PROGRESS',payload:0});
    dispatch({type:'REPOS_FETCH', page});
    let response;
    let data;
    if(!cache.get(url)){
      try {
        response = await fetch(url,{headers:new Headers({'Accept':'application/vnd.github.mercy-preview+json'})});
        dispatch({type:'SET_PROGRESS',payload:10});
        if(response.ok){
          data = await response.json();
          data = utils.doFilter(data,processing.filter);
          dispatch({type:'SET_PROGRESS',payload:60});
          cache.set(url, data, timeout);
          dispatch({type:'SET_PROGRESS',payload:100});
          dispatch({type:'REPOS_FULLFILED', payload:data, page});
        }else{
          throw new Error(utils.createErrorMsg(response));
        }
      } catch (e) {
        console.error(e);
        dispatch({type:'SET_ERROR',error:utils.createErrorMsg(response,e)});
        utils.routeTo("/error");
        return;
      }
    }
    return cache.get(url);
  }
}

export const getUser = function(user){
  return async function(dispatch){
    dispatch({type:'SET_PROGRESS',payload:0});
    dispatch({type:'USER_FETCH'});
    let url = `https://api.github.com/users/${user}`;
    let response;
    if(!cache.get(url)){

      try {
        response = await fetch(url);
        if(response.ok){
          dispatch({type:'SET_PROGRESS',payload:50});
          let data = await response.json();
          cache.set(url, data, timeout);
          dispatch({type:'USER_FULLFILED',payload:data});
          dispatch({type:'SET_PROGRESS',payload:100});
        }else{
          throw new Error(utils.createErrorMsg(response));
        }
      } catch (e) {
        console.error(e);
        dispatch({type:'SET_ERROR',error:utils.createErrorMsg(response,e)});
        utils.routeTo("/error");
        return;
      }
    }
    return cache.get(url);
  }
};


export const getRepo = function(owner,repo){
  return async function(dispatch){
    dispatch({type:'SET_PROGRESS',payload:0});
    dispatch({type:'REPO_FETCH'});
    let url = `https://api.github.com/repos/${owner}/${repo}`;
    const contributors_url = `https://api.github.com/repos/${owner}/${repo}/contributors?page=1&per_page=3`;
    const prs_url=`https://api.github.com/repos/${owner}/${repo}/pulls?state=open&sort=popularity&direction=desc&per_page=5`;
    const langs_url=`https://api.github.com/repos/${owner}/${repo}/languages??page=1&per_page=3`;
    let data = {};
    if(!cache.get(url)){
      try {
        const promises = [fetch(url),fetch(contributors_url),fetch(prs_url),fetch(langs_url)];
        const results = await Promise.all(promises);
        dispatch({type:'SET_PROGRESS',payload:50});
        const total_res = await Promise.all(results.map(res => res.json()));
        data = total_res[0];
        data.contributors = total_res[1];
        data.prs = total_res[2];
        data.langs = utils.getPairsArray(total_res[3]);
        console.log(data);
        cache.set(url,data);
        dispatch({type:'SET_PROGRESS',payload:100});
        dispatch({type:'REPO_FULLFILED',payload:data});
      } catch (e) {
        console.error(e);
        dispatch({type:'SET_ERROR',error:utils.createErrorMsg(response,e)});
        return;
      }
    }
    return cache.get(url);
  }
};

export const resetProgress = () => {
  return (dispatch) => {
    dispatch({type:'RESET_PROGRESS'});
  }
}

export const modifyFilter = (set,key,value) => {
  return (dispatch) => {
    dispatch({type:'MODIFY_FILTER',key,value,set});
  }
}

export const modifySort = (set,key,value) => {
  return (dispatch) => {
    dispatch({type:'MODIFY_SORT',key,value,set});
  }
}

export const setAll = (payload) => {
  return (dispatch) => {
    dispatch({type:'SET_ALL', payload});
  }
}
