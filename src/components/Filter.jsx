import { h } from 'preact';
import Select from './Select.jsx';
import './Filter.less';

const Filter = ({ children,...props }) => {
    return(
      <div class="filter">
        <input class="name-filter" type="text" placeholder="Search repositories..."/>
        <Select langs={['C','C++','C#','Pyton','Java']}/>
        <Select langs={['C','C++','C#','Pyton','Java']}/>
      </div>
  );
}

export default Filter;
