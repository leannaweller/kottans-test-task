import { h, Component } from 'preact';
import Header from './Header.jsx';
import Repos from './Repos.jsx';
import Profile from './helper/Profile.jsx';
import Processing from './Processing.jsx';
import {route} from 'preact-router';
import Progress from './helper/Progress.jsx';
import * as utils from '../utils';

import './Main.less';

class Main extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const {user,repos,profile,matches} = this.props;
    const {filter,sort} = this.createProcessingData();
    if(utils.validateFilter(filter) && utils.validateSort(sort)){
      this.context.setAll({filter,sort});
      window.addEventListener('scroll', this.handleScroll);
      this.getUserData(this.props.profile);
    }else{
      route(`/error`);
    }
  }
  getChildContext() {
    const {createProcessingData} = this;
    return {createProcessingData};
  }
  createProcessingData = () => {
    const {matches} = this.props;
    const processing =
    {
      filter: utils.getFilterParams(matches),
      sort: utils.getSortParams(matches)
    };
    return processing;
  }
  getReposWrapper = (name,options) => {
    const processing = this.createProcessingData();
    console.log(processing);
    this.context.getRepos(name,options,processing);
  }
  getUserData(name){
    this.context.resetProgress();
    this.context.getUser(name);
    this.getReposWrapper(name,{page:1,per_page:this.context.per_page});
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  componentWillUpdate(nextProps, nextState){
    const {profile} = this.props;
    const {per_page} = this.context;
    if(nextProps.profile != this.props.profile){
      this.getUserData(nextProps.profile);
    }else{
      if(nextProps.matches.language != this.props.matches.language){
        this.getReposWrapper(profile,{page:1,per_page});
      }
    }
  }
  handleScroll = (e) => {
    const{profile,getRepos,progress,repos} = this.props;
    const scrolled = window.innerHeight + window.scrollY;
    const height = document.body.offsetHeight;
    if (scrolled >= height && !progress.loading) {
      const ratio = repos.data.length/this.context.per_page;
      console.log(ratio);
      if(ratio % 1 == 0){
        const page = Math.floor(ratio) + 1;
        console.log(`Page ${page}`,repos.data.length,this.context.per_page)
        this.getReposWrapper(profile,{page,per_page:this.context.per_page})
      }
    }
  }
  sortRepos = (repos) => {
    const {sort} = this.createProcessingData();
    const type = sort.find(el => (el.key == 'sorttype'));
    const order = sort.find(el => (el.key == 'orderby'));
    if(type && order){
      return utils.sort(type.value,order.value,repos);
    }
    return repos;
  }
  render({user,repos,progress,getRepos,profile}) {
      const _repos = this.sortRepos(repos.data);
      return (
        <main>
          {
            (user.data && repos.data) ?
            <div class="data">
              <Profile user={user.data}/>
              <div className="container">
                <Processing data={repos.data} profile={profile}/>
                <Repos repos={_repos}/>
                {
                  progress.loading &&
                  <Progress progress={progress}/>
                }
              </div>
            </div>
            :
            <Progress type={"all"} progress={progress}/>
          }
        </main>
      );
  }
}

export default Main;
