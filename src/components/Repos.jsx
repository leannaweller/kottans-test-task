import { h, Component } from 'preact';
import Repo from './Repo.jsx';

class Repos extends Component {
  render({repos}) {
      return (
        <div class="repos" id="repos">
          {repos.map(repo=><Repo repo={repo}/>)}

        </div>
      );
  }
}

export default  Repos;
