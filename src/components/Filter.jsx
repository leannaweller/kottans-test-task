import { h } from 'preact';
import './Filter.less';
const Filter = ({ children,...props }) => {
    return(
      <div class="filter">
        <input type="text" placeholder="Search repositories..."/>
        <button className="filter__select">
          <i>Type:</i> All <i className="ion-arrow-down-b"></i>
        </button>
        <button className="filter__select">
          <i>Language:</i> All<i className="ion-arrow-down-b"></i>
        </button>
      </div>
  );
}

export default Filter;
