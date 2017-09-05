import { h,  Component } from 'preact';
import Sorting from './Sorting.jsx';
import Filter from './Filter.jsx'
import './Processing.less';
class Processing extends Component {

  render(props,{name}){
    return(
      <div className="processing">
        <Filter/>
        <Sorting/>
      </div>
    );
  }
}

export default Processing;
