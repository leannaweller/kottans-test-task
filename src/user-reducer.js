var initialState = {
  loading: false,
  data: null,
  error: null
}

export default (state = initialState,action) => {
  console.log(action);
  switch(action.type){
    case 'USER_FETCH':
      return {
        loading: true,
        data: null,
        error: null
      }
    case 'USER_FULLFILED':
      return {
        loading: false,
        data: action.payload,
        error:null
      }
    case 'USER_FAILED':
      return {
        loading: false,
        data: null,
        error:action.error
      }
    default: return state;
  }
}
