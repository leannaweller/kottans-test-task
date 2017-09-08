import { h, Component } from 'preact';
import './ComplicatedCheckbox.less';
class ComplicatedCheckbox extends Component {
    constructor(props){
      super(props);
      this.state = {
        input : ''
      }
    }
    render({name,inputType},state){
      let input;
      if(inputType){
        if(inputType == 'date'){
          input = <input class="super-filter" type="date"/>
        }else{
          input = <input class="super-filter" type="text"/>
        }
      }
      return(
        <div class="complicated-checkbox">
          <input type="checkbox"/>
          <label htmlFor="">{name}
          {input}
          </label>
        </div>
      );
    }

}

export default ComplicatedCheckbox;
