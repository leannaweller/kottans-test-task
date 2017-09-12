import { h,  Component } from 'preact';
import Octocat from '../dummy/Octocat.jsx';
import Search from './helper/Search.jsx';
import './Home.less';
import {route} from 'preact-router';
class Header extends Component {
  constructor(props){
    super(props);

  }
  render(props,{name}){
    return(
      <main>
        <div className="home-content">
          <h3 class="epic-text">Enter user name or organization and enjoy!</h3>
          <div>
            <Search opacity={props.opacity} color={props.color} handleSubmit = {props.handleSubmit}/>
          </div>
        </div>
      </main>
  );
  }

}

export default Header;
