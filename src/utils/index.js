import {route} from 'preact-router';

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
  if(stars > 1000){
    stars = (stars / 1000.0).toFixed(1)+'k';
    if(stars > 1000000){
      stars = (stars / 1000000.0).toFixed(1)+'m';
    }
  }
  return stars;
}

export const  getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
