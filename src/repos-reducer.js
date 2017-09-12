var initialState = {
  data: null,
  page:0,
  raw: null
}

export default (state = (JSON.parse(localStorage.getItem('repos')) || initialState),action) => {
  let newState;
  switch(action.type){
    case 'REPOS_FULLFILED':{
      if(action.page > 1){
        newState =  {
          data: state.data.concat(action.payload),
          raw: state.raw.concat(action.raw),
          page:action.page
        }
      }else{
        newState =  {
          data: action.payload,
          raw: action.raw,
        }
      }
      break;
    }
    case 'REPOS_FETCH':{
      if(action.page == 1){
        newState =  {
          data: null,
          raw:null,
          page:0
        }
      }else{
        newState = {...state}
      }
      break;
    }
    default: newState = state;
  }
  localStorage.setItem("repos", JSON.stringify(newState));
  return newState;
}
