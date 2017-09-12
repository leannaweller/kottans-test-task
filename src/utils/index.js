import {route} from 'preact-router';
import  _ from 'lodash';
import moment from 'moment';

export const createErrorMsg = (response,error) => {
  let _error = response ? response.statusText : 'Big error';
  return _error;
}

export const routeTo = (path) => {
  if(window.location.href.indexOf(path) == -1){
    route(path);
  }
}

export const trimText = (text,max_symbols) => {
  if(!text){
    return
  }
  let trimmed = text.substring(0,max_symbols-1);
  if(text.length > max_symbols){
    trimmed = trimmed+'...';
  }
  return trimmed;
}

export const roundStars = (stars) => {
  if(stars > 1000000){
    stars = (stars / 1000000.0).toFixed(1)+'m';
  }else{
    if(stars > 1000){
      stars = (stars / 1000.0).toFixed(1)+'k';
    }
  }
  return stars;
}

export const merge = (arr1,arr2) => {
  return _.merge(arr1, arr2);
}

export const getFilterParams = (matches) => {
  let pairs = getPairsArray(matches);
  const filters = ['language','type','openissues','hastopics','starredgte','updatedafter'];
  pairs = pairs.map(pair => {return {...pair,key:pair.key.toLowerCase()}});
  pairs = pairs.filter(pair => filters.includes(pair.key));
  return pairs;
}

export const getSortParams = (matches) => {
  let pairs = getPairsArray(matches).map(pair => {return {...pair,key:pair.key.toLowerCase()}});
  pairs = pairs.filter(pair => (pair.key == 'sorttype' || pair.key == 'orderby'));
  return pairs;
}

export const  getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const getLangs = (repos) => {
  const langs = repos.map((repo) => repo.language);
  return _.uniq(langs);
}

export const getPairsArray = (data) => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const res = [];
  for(var i in keys){
    res.push({key:keys[i],value:values[i]})
  }
  return res;
}

export const  capitalize = (string) =>  {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const filter = (key,value,repos) => {
  key = key.toLowerCase();
  switch (key) {
    case 'language':{
      return repos.filter(repo => repo.language == value);
    }
    case 'type':{
      if(value == 'Forks'){
        return repos.filter(repo => repo.fork);
      }else{
        return repos.filter(repo => !repo.fork);
      }
    }
    case 'openissues':{
      return repos.filter(repo => (repo.open_issues_count > 0));
    }
    case 'hastopics':{
      return repos.filter(repo => repo.topics);
    }
    case 'starredgte':{
      return repos.filter(repo => (repo.stargazers_count >= parseInt(value)));
    }
    case 'updatedafter':{
      return repos.filter(repo => (new Date(repo.updated_at) > new Date(value)));
    }
    default:{
      return repos;
    }
  }
}

export const sort = (type,order,repos) =>{
  let factor = (order == 'ascending') ? 1 : -1;
  console.log(type,order);
  switch (type) {
    case 'issues':{
      return _.sortBy(repos, 'open_issues_count');
    }
    case 'stars':{
      return _.sortBy(repos, 'stargazers_count');
    }
    case 'name':{
      return _.sortBy(repos, 'name');
    }
    case 'updated':{
      return _.sortBy(repos, 'updated_at');
    }
    default:{
      return repos;
    }
  }
}


export const doFilter = (repos,filters) => {
  for(let f of filters){
    repos = filter(f.key,f.value,repos);
  }
  return repos;
}

export const validateFilter = (filter) => {
  let valid = true;
  for(let f of filter){
    if(f.key.toLowerCase() == 'starredgte'){
      if(parseInt(f.value) < 0){
        valid = false;
      }
    }
    if(f.key.toLowerCase() == 'updatedafter'){
      const date = moment(f.value);
      if(date == 'Invalid date'){
        console.log('Invalid date',f.value);
        valid = false;
      }
    }
  }
  return valid;
}

export const validateSort = (sort) => {
  const type = sort.find(el => (el.key == 'sorttype'));
  const order = sort.find(el => (el.key == 'orderby'));
  if(!type && !order){
    return true;
  }else{
    if(type && order){
      return true;
    }else{
      return false;
    }
  }
}
