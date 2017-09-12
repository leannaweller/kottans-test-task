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
      if(action.set){
        newState.filter = [...state.filter,{key,value}];
      }else{
        newState.filter = newState.filter.filter(item => item.key != action.key);
      }
      break;
    }
    case 'MODIFY_SORT': {
      newState = {...state};
      if(action.set){
        newState.sort = [...state.sort,{key,value}];
      }else{
        newState.sort = newState.sort.filter(item => item.key != action.key);
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
