import { h,  Component } from 'preact';
import Octocat from '../dummy/Octocat.jsx';
import Search from './helper/Search.jsx';
import './Header.less';
class Header extends Component {

  render(props,{name}){
    return(
      <header>
        <nav>
          <a href="/">
            <Octocat/>
          </a>
          <Search opacity={props.opacity} color={props.color} handleSubmit = {props.handleSubmit}/>
        </nav>
      </header>
  );
  }

}

export default Header;
