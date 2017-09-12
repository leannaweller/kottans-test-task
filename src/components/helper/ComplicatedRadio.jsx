import { h, Component } from 'preact';
import './ComplicatedRadio.less';
import * as utils from '../../utils';

class ComplicatedRadio extends Component {
    constructor(props){
      super(props);
      this.state = {
        current:''
      }
    }
    handleChange = (e) => {
      const {modifySort} = this.context;
      const {name} = this.props;
      const val = e.currentTarget.value;
      this.setState({current: val});
      modifySort(true,name,val);
    }
    render({params,name,selected},{current}){
      return(
        <div class="complicated-radio">
          {
            params.map(param =>
              <div class="radio-wrapper">
                <input name={name} value={param} checked={current==param} type="radio" onChange={this.handleChange}/>
                  {utils.capitalize(param)}
              </div>
            )
          }
        </div>
      );
    }

}

export default ComplicatedRadio;
