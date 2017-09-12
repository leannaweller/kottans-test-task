import { h, Component } from 'preact';
import './ComplicatedCheckbox.less';
class ComplicatedCheckbox extends Component {
    constructor(props,context){
      super(props);
      const {filter} = context.createProcessingData();
      const {name} = this.props;
      const param = filter.find(el => (el.key.toLowerCase() == name.toLowerCase()));
      this.state = {
        input : param ? (param.value || '') : '',
        checked: param ? true : false
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
        this.setState({checked: value});
      }else{
        if(checked){
          if(inputType && value){
              modifyFilter(true,name,value);
          }
          this.setState({input: value});
        }
      }
    }
    render({inputType,text,name},{checked,input}){
      let _input;
      if(inputType){
        if(inputType == 'date'){
          _input = <input class="super-filter" type="date" value={input}
                    onChange={this.handleChange}/>
        }else{
          _input = <input class="super-filter" value={input}  type="text"
                    onChange={this.handleChange}/>
        }
      }
      return(
        <div class="complicated-checkbox">
          <input type="checkbox" checked = {checked} onChange={this.handleChange}/>
          <label htmlFor="">{text}
          {_input}
          </label>
        </div>
      );
    }

}

export default ComplicatedCheckbox;
