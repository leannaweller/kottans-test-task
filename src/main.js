import App from './components/App.jsx'
import {h,render} from 'preact';
import {Provider} from 'preact-redux';
import thunk from 'redux-thunk';
import userReducer from './user-reducer.js';
import reposReducer from './repos-reducer';
import repoReducer from './repo-reducer';
import processingReducer from './processing-reducer';
import progressReducer from './progress-reducer';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'preact-router-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';

const store = createStore(combineReducers(
  {
    repos:reposReducer,
    user:userReducer,
    progress:progressReducer,
    repo:repoReducer,
    routing: routerReducer,
    processing: processingReducer
  }
),applyMiddleware(thunk));

const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
  <div>
    <Provider store={store}><App history={history}/></Provider>
  </div>,
  document.body
);
