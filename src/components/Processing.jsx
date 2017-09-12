import { h,  Component } from 'preact';
import Sorting from './Sorting.jsx';
import Filter from './Filter.jsx';
import {route} from 'preact-router';
import * as utils from '../utils';
import './Processing.less';

class Processing extends Component {
  handleApply = (e) => {
    e.preventDefault();
    const {profile} = this.props;
    const {filter,sort} = this.context.processing;
    const pairs = utils.merge(filter,sort);
    const query = pairs.map(pair => `${pair.key}=${pair.value}`).join('&');
    route(`/${encodeURI(profile)}?${query}`);
  }
  render({data}){
    return(
      <div className="processing">
        <form action="javascript">
          <Filter langs={utils.getLangs(data)}/>
          <Sorting/>
          <button className="btn-submit" type="submit" onClick={this.handleApply}>Apply</button>
          <button className="btn-submit" type="submit" onClick={this.hadleClear}>Clear</button>
        </form>
      </div>
    );
  }
}

export default Processing;
