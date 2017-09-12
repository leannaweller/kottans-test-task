var initialState = {
  filter:[],
  sort:[]
}

export default (state = initialState,action) => {
  let newState;
  const {key,value} = action;
  switch(action.type){
    case 'MODIFY_FILTER': {
      newState = {...state};
      newState.filter = newState.filter.filter(item => (item.key.toLowerCase() != action.key.toLowerCase()));
      if(action.set){
        newState.filter = [...newState.filter,{key,value}];
      }
      break;
    }
    case 'MODIFY_SORT': {
      newState = {...state};
      newState.sort = newState.sort.filter(item => (item.key.toLowerCase() != action.key.toLowerCase()));
      if(action.set){
        newState.sort = [...newState.sort,{key,value}];
      }
      break;
    }
    case 'SET_ALL': {
      if(action.payload){
        newState = {...action.payload};
      }else{
        newState = initialState;
      }

      break;
    }
    default: newState = state;

  }
  return newState;
}
