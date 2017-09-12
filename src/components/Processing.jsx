import { h,  Component } from 'preact';
import Sorting from './Sorting.jsx';
import Filter from './Filter.jsx';
import {route} from 'preact-router';
import * as utils from '../utils';
import Modal from './helper/Modal.jsx';
import './Processing.less';

class Processing extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  handleApply = (e) => {
    e.preventDefault();
    const {profile} = this.props;
    const {filter,sort} = this.context.processing;
    const pairs = utils.merge(filter,sort);
    const query = pairs.map(pair => `${pair.key}=${pair.value}`).join('&');
    if(utils.validateFilter(filter) && utils.validateSort(sort)){
      route(`/${encodeURI(profile)}?${query}`);
      window.location.reload();
    }else{
      this.setState({open:true})
    }
  }
  handleClear = () => {
    route(`/${encodeURI(profile)}`);
    window.location.reload();
  }
  render({data},{open}){
    return(
      <div className="processing">
        <form >
          <Filter langs={utils.getLangs(data)}/>
          <Sorting/>
          <button className="btn-submit" type="submit" onClick={this.handleApply}>Apply</button>
          <button className="btn-submit" type="submit" onClick={this.hadleClear}>Clear</button>
        </form>
        <Modal open={open} onClose={()=>{this.setState({open:false})}}>
          <h1>Oops..Error...</h1>
        </Modal>
      </div>
    );
  }
}

export default Processing;
