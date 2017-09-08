var initialState = {
  progress: 0,
  error: null,
  loading: false
}

export default (state = initialState,action) => {
  let newState;
  switch(action.type){
    case 'SET_PROGRESS': {
      let loading = (action.payload < 100) ? true : false;
      newState =  {...state,progress:action.payload,loading:loading}
      break;
    }
    case 'SET_ERROR': {
      newState =  {...state,error:action.error,progress:0}
      break;
    }
    case 'RESET_PROGRESS': {
      newState =  initialState;
      break;
    }
    default: newState = state;

  }
  return newState;
}
