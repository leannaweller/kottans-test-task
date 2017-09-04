var initialState = {
  repos_progress: 0,
  repos_error: null,
  user_progess: 0,
  user_error: null
}

export default (state = (JSON.parse(localStorage.getItem('progress')) || initialState),action) => {
  let newState;
  switch(action.type){
    case 'SET_REPOS_PROGRESS': {
      newState =  {...state,repos_progress:action.payload}
      break;
    }
    case 'SET_REPOS_ERROR': {
      newState =  {...state,repos_error:action.error}
      break;
    }
    case 'SET_USER_PROGRESS': {
      newState =  {...state,user_progress:action.payload}
      break;
    }
    case 'SET_USER_ERROR': {
      newState =  {...state,user_error:action.payload}
      break;
    }
    case 'RESET_PROGRESS': {
      newState =  initialState;
      break;
    }
    default: newState = state;

  }
  localStorage.setItem("progress", JSON.stringify(newState));
  return newState;
}
