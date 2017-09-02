var initialState = {
  loading: false,
  data: null,
  error: null
}

export default (state = (JSON.parse(localStorage.getItem('user')) || initialState),action) => {
  console.log(action);
  let newState;
  switch(action.type){
    case 'USER_FETCH':{
      newState =  {
        loading: true,
        data: null,
        error: null
      }
      break;
    }
    case 'USER_FULLFILED':{
      newState =  {
        loading: false,
        data: action.payload,
        error:null
      }
      break;
    }
    case 'USER_FAILED':{
      newState =  {
        loading: false,
        data: null,
        error:action.error
      }
      break;
    }
    default: return state;
  }
  localStorage.setItem("repos", JSON.stringify(newState));
  return newState;
}
