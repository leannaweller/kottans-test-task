var initialState = {
  data: null,
  filter:{},
  sorting:{}
}

export default (state = (JSON.parse(localStorage.getItem('repos')) || initialState),action) => {
  let newState;
  switch(action.type){
    case 'REPO_FULLFILED':{
      newState =  {
        data: action.payload,
      }
      break;
    }
    default: newState = state;
  }
  localStorage.setItem("repos", JSON.stringify(newState));
  return newState;
}
