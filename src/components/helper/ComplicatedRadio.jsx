import { h, Component } from 'preact';
import './ComplicatedRadio.less';
import * as utils from '../../utils';

class ComplicatedRadio extends Component {
    constructor(props){
      super(props);
    }
    render({params,name,selected},state){
      return(
        <div class="complicated-radio">
          {
            params.map(param=><div class="radio-wrapper"><input name={name} value={param} type="radio"/>{utils.capitalize(param)}</div>)
          }
        </div>
      );
    }

}

export default ComplicatedRadio;
