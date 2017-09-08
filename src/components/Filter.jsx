import { h } from 'preact';
import Select from './helper/Select.jsx';
import ComplicatedCheckbox from './helper/ComplicatedCheckbox.jsx';
import './Filter.less';

const Filter = ({ children,...props }) => {
    return(
      <div class="filter">
        <div className="filter-line">
          <input class="super-filter" type="text" placeholder="Search repositories..."/>
          <Select name={'language'} params={['C','C++','C#','Pyton','Java']}/>
          <Select name={'type'} params={['All','Forks','Sources']}/>
        </div>
        <div className="filter-line">
          <ComplicatedCheckbox name={'Open Issues'} value={'openIssues'}/>
          <ComplicatedCheckbox name={'Has Topics'} value={'hasTopics'}/>
          <ComplicatedCheckbox name={'Starred > '} inputType={'text'} value={'starredGte'}/>
          <ComplicatedCheckbox name={'Updated after'} value = {'updatedAfter'} inputType={'date'}/>
        </div>
      </div>
  );
}

export default Filter;
