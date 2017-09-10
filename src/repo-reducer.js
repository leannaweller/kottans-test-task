var initialState = {
  data: null,
}

export default (state = (JSON.parse(localStorage.getItem('repo')) || initialState),action) => {
  console.log(action);
  let newState;
  switch(action.type){
    case 'REPO_FULLFILED':{
      newState =  {
        data: action.payload,
      }
      break;
    }
    case 'REPO_FETCH':{
      newState =  {
        data: null,
      }
      break;
    }
    default: return state;
  }
  localStorage.setItem("repo", JSON.stringify(newState));
  return newState;
}
