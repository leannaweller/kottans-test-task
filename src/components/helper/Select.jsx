import { h, Component } from 'preact';
import classNames from 'classnames'
import * as utils from '../../utils';
import './Select.less';

class Select extends Component {
    constructor(props,context){
      super(props);
      const {filter} = context.createProcessingData();
      const {name} = this.props;
      const param = filter.find(el => (el.key.toLowerCase() == name.toLowerCase()));
      this.state = {
        open:false,
        param: param ? param.value : 'All'
      }
      this.setFilter = this.setFilter.bind(this);
    }
    setFilter = (param) => {
      const {modifyFilter} = this.context;
      const {name} = this.props;
      if(param != 'All'){
        modifyFilter(true,name,param);
      }else{
        modifyFilter(false,name);
      }
    }
    handleChange = (e) => {
      const val = e.target.value;
      this.setState({param:val});
      this.setFilter(val);
    }
    handleClick = (lang) => {
      this.setState({param:lang,open:false});
      this.setFilter(lang);
    }
    render({params,name},{open,param}){
      let _params = name=='language' ? [...params,'All'] : params;
      _params = _params.filter(param => (param ? true : false));
      return(
        <div className="select_wrapper">
          <div
            className="select_control"
            onClick={()=>this.setState({open:!open})}>
            <i>{utils.capitalize(name)}:</i> <input value={param}
              onChange={this.handleChange} type="text"/>
            <i className="ion-arrow-down-b"></i>
          </div>
          <div class="select-list" style={{display: (open ? 'block' : 'none')}}>
            <ul>
              {_params.map(lang=><li className={classNames({'active':lang==param})}
            onClick={this.handleClick.bind(null,lang)}>
              {lang}</li>)}
            </ul>
          </div>
        </div>
      );
    }
}

export default Select;
