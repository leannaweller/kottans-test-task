import { h } from 'preact';
import Octocat from '../dummy/Octocat.jsx';
import Search from './Search.jsx';
import './Header.less';
const Header = ({ children,...props }) => {
    return(
      <header>
        <nav>
          <a href="/">
            <Octocat/>
          </a>
          <Search/>
        </nav>
      </header>
  );
}

export default Header;
