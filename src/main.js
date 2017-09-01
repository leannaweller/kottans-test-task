import App from './components/App.jsx'
import {h,render} from 'preact';
import {Provider} from 'preact-redux';
import thunk from 'redux-thunk';
import userReducer from './user-reducer.js';
import repoReducer from './repo-reducer';
import {createStore,applyMiddleware,combineReducers} from 'redux';

const store = createStore(combineReducers({repos:repoReducer,user:userReducer}),applyMiddleware(thunk))
render(
  <div>
    <Provider store={store}><App/></Provider>
  </div>,
  document.body
);
