import { h, Component } from 'preact';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Home from './Home.jsx';
import Error from './Error.jsx';
import NotFound from './NotFound.jsx';
import {Router,route} from 'preact-router';
import {connect} from 'preact-redux';
import {getUser,getRepos,resetProgress} from '../actions';
import './App.less';

class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUser = this.getUser.bind(this);
  }
  getUser(name){
    this.props.resetProgress();
    this.props.getUser(name,{page:1,per_page:10});
    this.props.getRepos(name,{page:1,per_page:10});
  }
  handleSubmit(name){
    route("/"+encodeURI(name));
  }
  render({user,repos,progress}) {
      return (
        <div>
          <Header handleSubmit={this.handleSubmit} opacity={1} color={'white'}/>
          <Router>
            <Main
              path="/:profile"
              getUser={this.getUser}
              user={user}
              repos={repos}
              progress={progress}/>
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
    progress: state.progress
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getUser: (user,options) => dispatch(getUser(user,options)),
    getRepos: (user,options) => dispatch(getRepos(user,options)),
    resetProgress: () => dispatch(resetProgress())
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);
