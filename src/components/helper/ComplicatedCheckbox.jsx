import { h, Component } from 'preact';
import './ComplicatedCheckbox.less';
class ComplicatedCheckbox extends Component {
    constructor(props){
      super(props);
      this.state = {
        input : '',
        checked:false
      }
    }
    handleChange = (event) => {
      const {name,inputType} = this.props;
      const {modifyFilter} = this.context;
      const {input,checked} = this.state;
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      if(target.type === 'checkbox'){
        this.setState({checked: value});
        if(target.checked){
          if(inputType && input){
            modifyFilter(true,name,input);
          }else{
            if(!inputType){
              modifyFilter(true,name,true);
            }
          }
        }else{
          modifyFilter(false,name,true);
        }
      }else{
        if(checked){
          modifyFilter(false,name,true);
        }
        this.setState({input: value});
      }
    }
    render({inputType,text},state){
      let input;
      if(inputType){
        if(inputType == 'date'){
          input = <input class="super-filter" type="date" onChange={this.handleChange}/>
        }else{
          input = <input class="super-filter" type="text" onChange={this.handleChange}/>
        }
      }
      return(
        <div class="complicated-checkbox">
          <input type="checkbox" onChange={this.handleChange}/>
          <label htmlFor="">{text}
          {input}
          </label>
        </div>
      );
    }

}

export default ComplicatedCheckbox;
