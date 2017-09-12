import { h, Component } from 'preact';
import colors from '../colors.json';
import Modal from './helper/Modal.jsx';
import Progress from './helper/Progress.jsx';
import RepoDetails from './helper/RepoDetails.jsx';
import moment from 'moment';
import * as utils from '../utils';
import './Repo.less';

class Repo extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const {repo} = this.props;
    this.setState({isOpen:true});
    this.context.getRepo(repo.owner.login,repo.name)
  }
  render({repo},{isOpen}){
    const {language:lang} = repo;
    const  color = colors[lang] || 'white';
    const {progress, repo:selected} = this.context;
    const style = {backgroundColor:color};
      return(
        <div className="repo-wrapper">
          <div class="repo-card" onClick={this.handleClick}>
            <div class="repo-card__title"><a href={repo.html_url}>{repo.name}</a></div>
              {
                repo.fork && <div className="repo-fork">
                  <i class="ion-fork-repo"></i>
                </div>
              }
              <div><i class="ion-ios-star"></i>{utils.roundStars(repo.stargazers_count)}</div>
              <div>Updated: {moment(new Date(repo.updated_at)).fromNow()}</div>
            <div>
              {repo.description}
            </div>
            <div class="repo-card__lang-info">
              {
                lang && <span style={style} class='repo-card__lang-color'></span>
              }
              {
                lang && <span class='repo-card__lang-text'>{repo.language}</span>
              }
            </div>
          </div>
          <Modal open={isOpen} onClose={() => this.setState({isOpen:false})}>
            {
              (progress.loading && !selected.data)?
              <Progress progress={progress}/>
              :
              <RepoDetails selected={selected}/>
            }
          </Modal>
        </div>
    );
  }

}

export default Repo;
