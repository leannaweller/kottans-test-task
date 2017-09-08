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
    case 'USER_FETCH':{
      newState =  {
        data: null,
      }
      break;
    }
    default: return state;
  }
  localStorage.setItem("user", JSON.stringify(newState));
  return newState;
}
