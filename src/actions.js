import cache from 'js-cache';


let timeout =  60000;


let getRepos = function(user,{page,per_page}){
  return async function (dispatch){
    let url =  `https://api.github.com/users/${user}/repos?page=${page}&per_page=${per_page}`;
    dispatch({type:'REPO_FETCH'});
    if(!cache.get(url)){
      try {
        let response = await fetch(url);
        if(response.ok){
          let data = await response.json();
          let promises = [];
          for(let repo of data){
            if(repo.languages_url){
              promises.push(fetch(repo.languages_url));
            }else{
              throw new Error();
            }
          }
          let results = await Promise.all(promises);
          promises = [];
          for(let res of results){
            promises.push(res.json())
          }
          results = await Promise.all(promises);
          for(let i in results){
             data[i].languages = results[i];
          }
          dispatch({type:'REPO_FULLFILED',payload:data});
          cache.set(url, data, timeout);
        }else{
          throw new Error(response.statusText);
          dispatch({type:'REPO_FAILED',error:response.statusText});
        }
      } catch (e) {
        console.error(e);
        return;
      }
    }
    return cache.get(url);
  }
}

let getUser = function(user){
  return async function(dispatch){
    dispatch({type:'USER_FETCH'});
    let url = `https://api.github.com/users/${user}`;
    if(!cache.get(url)){
      try {
        let response = await fetch(url);
        if(response.ok){
          let data = await response.json();
          dispatch({type:'USER_FULLFILED',payload:data});
          cache.set(url, data, timeout);
        }else{
          throw new Error(response.statusText);
        }
      } catch (e) {
        console.err(e);
        dispatch({type:'USER_FAILED',error:response.statusText});
        return;
      }
    }
    return cache.get(url);
  }
};


let getRepo = function(owner,repo){
  return async function(dispatch){
    let url = `https://api.github.com/repos/${owner}/${repo}`;
    if(!cache.get(url)){
      let data = null;
      try {
        let response = await fetch(url);
        if(response.ok){
          data = await response.json();
          if(data.languages_url){
              response = await fetch(data.languages_url);
              if(response.ok){
                data.languages = await response.json();
                cache.set(url, data, timeout);
              }else{
                throw new Error(response.statusText);
              }
          }else{
            throw new Error();
          }
        }else{
          throw new Error(response.statusText);
        }
      } catch (e) {
        console.error(e);
        return;
      }
    }
    return cache.get(url);
  }
};



export {getUser,getRepos,getRepo};
