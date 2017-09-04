import { h, Component } from 'preact';
import Header from './Header.jsx';
import Repos from './Repos.jsx';
import Profile from './Profile.jsx';
import Filter from './Filter.jsx';
import Progress from './Progress.jsx';

import './App.less';

class Main extends Component {
  componentDidMount(){
    this.props.getUser(this.props.profile);
  }
  componentWillUpdate(nextProps, nextState){
    if(nextProps.profile!=this.props.profile){
      this.props.getUser(nextProps.profile);
    }
  }
  render({user,repos,progress}) {
      return (
        <div className="main">
          {
            (user.data && repos.data) ?
            <main>
              <Profile user={user.data}/>
              <div className="container">
                <Filter/>
                <Repos repos={repos.data}/>
              </div>
            </main>
            :
            <Progress type={"all"} progress={progress}/>
          }
        </div>
      );
  }
}



export default Main;
