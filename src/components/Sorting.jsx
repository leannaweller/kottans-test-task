import { h,  Component } from 'preact';
import ComplicatedRadio from './helper/ComplicatedRadio.jsx';
import './Sorting.less';

class Sorting extends Component {

  render(props,state){
    return(
      <div class="sorting">
        <ComplicatedRadio name={"sortType"} params={['issues','stars','name','updated']}/>
        <ComplicatedRadio name={"orderBy"} params={['ascending','descending']}/>
      </div>
    );
  }
}

export default Sorting;
