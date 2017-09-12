import { h, Component } from 'preact';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Home from './Home.jsx';
import Error from './helper/Error.jsx';
import NotFound from './helper/NotFound.jsx';
import {Router,route} from 'preact-router';
import {connect} from 'preact-redux';
import {getUser,getRepos,resetProgress,getRepo,setAll,modifySort,modifyFilter} from '../actions';
import './App.less';

class App extends Component {
  constructor(props){
    super(props);
  }
  getChildContext() {
    return {per_page: 10, ...this.props};
  }
  handleSubmit = (name) => {
    route("/"+encodeURI(name));
  }
  render({user,repos,progress,history,setAll,processing}) {
      return (
        <div>
          <Header handleSubmit={this.handleSubmit} opacity={1} color={'white'}/>
          <Router history={history}>
            <Main
              path="/:profile"
              user={user}
              repos={repos}
              progress={progress}
              processing={processing}
              />
            <Home handleSubmit={this.handleSubmit} opacity={0.1} color={'black'} path="/"/>
            <NotFound default/>
            <Error path="/error"/>
          </Router>
        </div>
      );
  }
}

const mapStateToProps = (state,props) => {
  return {
    user: state.user,
    repos: state.repos,
    progress: state.progress,
    repo:state.repo,
    processing:state.processing
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getUser: (user,options) => dispatch(getUser(user,options)),
    getRepos: (user,options,processing) => dispatch(getRepos(user,options,processing)),
    getRepo: (user,repo) => dispatch(getRepo(user,repo)),
    resetProgress: () => dispatch(resetProgress()),
    modifyFilter: (set,key,value) => dispatch(modifyFilter(set,key,value)),
    modifySort: (set,key,value) => dispatch(modifySort(set,key,value)),
    setAll: (payload) => dispatch(setAll(payload)),
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);
