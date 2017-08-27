import { h } from 'preact';
import './Search.less';
const search = ({ children,...props }) => {
    return(
      <div class="search">
        <input type="text" placeholder="Search repositories..."/>
      </div>
  );
}

export default search;
