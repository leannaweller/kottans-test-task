import { h, Component } from 'preact';
import './Select.less';

class Select extends Component {
    constructor(props){
      super(props);
      this.state = {
        open:false,
        param:'All'
      }
    }
    render({langs},{open,param}){
      // let _langs = [...langs,'All'];
      return(
        <div className="select_wrapper">
          <button className="select_control" onClick={()=>this.setState({open:!open})}>
            <i>Language:</i> <input value={param}
              onChange={(e)=>{this.setState({param:e.target.value}); console.log('Changed')}} type="text"/>
            <i className="ion-arrow-down-b"></i>
          </button>
          <div class="select-list" style={{display: (open ? 'block' : 'none')}}>
            <ul>
              {langs.map(lang=><li onClick={()=>this.setState({param:lang,open:false})}>{lang}</li>)}
            </ul>
          </div>
        </div>
      );
    }
}

export default Select;
