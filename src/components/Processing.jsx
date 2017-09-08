import { h,  Component } from 'preact';
import Sorting from './Sorting.jsx';
import Filter from './Filter.jsx'
import './Processing.less';
class Processing extends Component {

  render(props,{name}){
    return(
      <div className="processing">
        <form action="">
          <Filter/>
          <Sorting/>
          <button className="btn-submit" type="submit">Apply</button>
        </form>
      </div>
    );
  }
}

export default Processing;
