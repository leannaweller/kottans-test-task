var initialState = {
  repos_progress: 0,
  repos_error: null
}

export default (state = (JSON.parse(localStorage.getItem('progress')) || initialState),action) => {
  let newState;
  if(action.type == 'SET_PROGRESS'){
    newState =  {
      data: action.payload,
    }
  }else{
    newState = state;
  }
  localStorage.setItem("progress", JSON.stringify(newState));
  return newState;
}
