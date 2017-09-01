import { h, Component } from 'preact';
import Header from './Header.jsx';
import Repos from './Repos.jsx';
import Profile from './Profile.jsx';
import Filter from './Filter.jsx';
import {connect} from 'preact-redux';
import {getUser,getRepos} from '../actions';
import './App.less';

class App extends Component {
  componentDidMount(){
    this.props.getUser('leannaweller',{page:1,per_page:10});
    this.props.getRepos('leannaweller',{page:1,per_page:10});
  }
  render({user,repos}) {
      return (
        <div>
          <Header/>
          <main>
            <Profile/>
            <div className="container">
              <Filter/>
              {
                repos.data ?
                <Repos repos={repos.data}/>
                :
                <div>No data</div>
              }
            </div>
          </main>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    repos: state.repos
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getUser: (user,options) => dispatch(getUser(user,options)),
    getRepos: (user,options) => dispatch(getRepos(user,options))
  }
}

export default  connect(mapStateToProps,mapDispatchtoProps)(App);
