import { h } from 'preact';
import Select from './Select.jsx';
import './Filter.less';

const Filter = ({ children,...props }) => {
    return(
      <div class="filter">
        <form action="">
          <input class="name-filter" type="text" placeholder="Search repositories..."/>
          <Select name={'language'} params={['C','C++','C#','Pyton','Java']}/>
          <Select name={'type'} params={['All','Forks','Sources']}/>
          <button className="btn-submit" type="submit">Apply</button>
        </form>
      </div>
  );
}

export default Filter;
