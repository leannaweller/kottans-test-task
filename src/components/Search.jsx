import { h, Component } from 'preact';
import './Search.less';
class Search extends Component {
    constructor(props){
      super(props);
      this.state = {
        name : ''
      }
    }
    render(props,state){
      const bgc = 'rgba(0,0,0,'+props.opacity+')';
      return(
        <div class="search">
            <form class="search-form" >
              <input type="text" placeholder="Search users or organizations..."
                onChange = {(e)=>this.setState({name:e.target.value})}
                style={{backgroundColor:bgc,
                color:props.color}}/>
              <button className="btn-submit" type="submit"
                onClick={()=>props.handleSubmit(this.state.name)}>
                Search
              </button>
            </form>
        </div>
      );
    }

}

export default Search;
