import { h,  Component } from 'preact';
import Octocat from '../dummy/Octocat.jsx';
import Search from './Search.jsx';
import './Header.less';
import {route} from 'preact-router';
class Header extends Component {
  constructor(props){
    super(props);

  }
  render(props,{name}){
    return(
      <main>
        This is home!!!
        <Search opacity={props.opacity} color={props.color} handleSubmit = {props.handleSubmit}/>
      </main>
  );
  }

}

export default Header;
