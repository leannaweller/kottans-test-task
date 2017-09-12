import { h } from 'preact';
import Select from './helper/Select.jsx';
import ComplicatedCheckbox from './helper/ComplicatedCheckbox.jsx';
import './Filter.less';

const Filter = ({ children,...props }) => {
  const {langs} = props;
    return(
      <div class="filter">
        <div className="filter-line">
          <Select name={'language'} params={langs}/>
          <Select name={'type'} params={['All','Forks','Sources']}/>
        </div>
        <div className="filter-line">
          <ComplicatedCheckbox text={'Open Issues'} name={'openIssues'}/>
          <ComplicatedCheckbox text={'Has Topics'} name={'hasTopics'}/>
          <ComplicatedCheckbox text={'Starred > '} inputType={'text'} name={'starredGte'}/>
          <ComplicatedCheckbox text={'Updated after'} name = {'updatedAfter'} inputType={'date'}/>
        </div>
      </div>
  );
}

export default Filter;
