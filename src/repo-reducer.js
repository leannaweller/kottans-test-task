var initialState = {
  loading: false,
  data: null,
  error: null
}

export default (state = (JSON.parse(localStorage.getItem('repos')) || initialState),action) => {
  let newState;
  switch(action.type){
    case 'REPO_FETCH': {
      newState =  {
        loading: true,
        data: null,
        error: null
      }
      break;
    }

    case 'REPO_FULLFILED':{
      newState =  {
        loading: false,
        data: action.payload,
        error:null
      }
      break;
    }

    case 'REPO_FAILED':{
      newState =  {
        loading: false,
        data: null,
        error:action.error
      }
      break;
    }

    default: newState = state;
  }
  localStorage.setItem("repos", JSON.stringify(newState));
  return newState;
}
