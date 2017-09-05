import { h, Component } from 'preact';
import classNames from 'classnames'
import './Select.less';

class Select extends Component {
    constructor(props){
      super(props);
      this.state = {
        open:false,
        param:'All'
      }
    }
    render({params,name},{open,param}){
      console.log('render',this.state,this.props)
      let _params = name=='language' ? [...params,'All'] : params;
      return(
        <div className="select_wrapper">
          <div className="select_control" onClick={()=>this.setState({open:!open})}>
            <i>{name}:</i> <input value={param}
              onChange={(e)=>this.setState({param:e.target.value})} type="text"/>
            <i className="ion-arrow-down-b"></i>
          </div>
          <div class="select-list" style={{display: (open ? 'block' : 'none')}}>
            <ul>
              {_params.map(lang=><li className={classNames({'active':lang==param})}
                onClick={()=>this.setState({param:lang,open:false})}>
              {lang}</li>)}
            </ul>
          </div>
        </div>
      );
    }
}

export default Select;
