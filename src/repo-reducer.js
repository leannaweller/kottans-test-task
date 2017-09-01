var initialState = {
  loading: false,
  data: null,
  error: null
}

export default (state = initialState,action) => {
  switch(action.type){
    case 'REPO_FETCH':
      return {
        loading: true,
        data: null,
        error: null
      }
    case 'REPO_FULLFILED':
      return {
        loading: false,
        data: action.payload,
        error:null
      }
    case 'REPO_FAILED':
      return {
        loading: false,
        data: null,
        error:action.error
      }
    default: return state;
  }
}
