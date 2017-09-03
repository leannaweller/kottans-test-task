var initialState = {
  data: null,
}

export default (state = (JSON.parse(localStorage.getItem('user')) || initialState),action) => {
  console.log(action);
  let newState;
  switch(action.type){
    case 'USER_FULLFILED':{
      newState =  {
        data: action.payload,
      }
      break;
    }
    default: return state;
  }
  localStorage.setItem("repos", JSON.stringify(newState));
  return newState;
}
