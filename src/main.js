import App from './components/App.jsx'
import {h,render} from 'preact';
import {Provider} from 'preact-redux';
import thunk from 'redux-thunk';
import userReducer from './user-reducer.js';
import reposReducer from './repos-reducer';
import progressReducer from './progress-reducer';
import {createStore,applyMiddleware,combineReducers} from 'redux';

const store = createStore(combineReducers(
  {
    repos:reposReducer,
    user:userReducer,
    progress:progressReducer
  }
),applyMiddleware(thunk))
render(
  <div>
    <Provider store={store}><App/></Provider>
  </div>,
  document.body
);
