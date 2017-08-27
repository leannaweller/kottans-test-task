import { h, Component } from 'preact';
import Header from './Header.jsx';
import Repo from './Repo.jsx';
import Profile from './Profile.jsx';
import Filter from './Filter.jsx';
import './App.less';

class App extends Component {
  render(props) {
      return (
        <div>
          <Header/>
          <main>
            <Profile/>
            <div className="repos">
              <Filter/>
              <Repo/>
            </div>

          </main>
        </div>
      );
  }
}

export default  App;
