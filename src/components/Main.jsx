import { h, Component } from 'preact';
import Header from './Header.jsx';
import Repos from './Repos.jsx';
import Profile from './helper/Profile.jsx';
import Processing from './Processing.jsx';
import Progress from './helper/Progress.jsx';

import './Main.less';

class Main extends Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    const {user,repos,profile} = this.props;
    window.addEventListener('scroll', this.handleScroll);
    if(!user.data || !repos.data|| profile!=user.data.login){
      this.props.getUserData(this.props.profile);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  componentWillUpdate(nextProps, nextState){
    if(nextProps.profile!=this.props.profile){
      this.props.getUserData(nextProps.profile);
    }
  }
  handleScroll(e){
    const{profile,getRepos,progress,repos} = this.props;
    const scrolled = window.innerHeight + window.scrollY;
    const height = document.body.offsetHeight;
    if (scrolled >= height && !progress.loading) {
      const ratio = repos.data.length/this.context.per_page;
      console.log(ratio);
      if(ratio % 1 == 0){
        const page = Math.floor(ratio) + 1;
        console.log(`Page ${page}`,repos.data.length,this.context.per_page)
        getRepos(profile,{page,per_page:this.context.per_page})
      }
    }
  }
  render({user,repos,progress,getRepos,profile}) {
      return (
        <main>
          {
            (user.data && repos.data) ?
            <div class="data">
              <Profile user={user.data}/>
              <div className="container">
                <Processing/>
                <Repos repos={repos.data}/>
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
