var initialState = {
  data: null,
  page:0
}

export default (state = (JSON.parse(localStorage.getItem('repos')) || initialState),action) => {
  let newState;
  switch(action.type){
    case 'REPOS_FULLFILED':{
      if(action.page > 1){
        newState =  {
          data: state.data.concat(action.payload),
          page:action.page
        }
      }else{
        newState =  {
          data: action.payload,
        }
      }
      break;
    }
    case 'REPOS_FETCH':{
      if(action.page == 1){
        newState =  {
          data: null,
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
