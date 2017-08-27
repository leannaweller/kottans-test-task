import { h } from 'preact';
import './Repo.less';

const Repo = ({ children,...props }) => {
    return(
      <div class="repo-card">
        <div class="repo-card__title"><a href="">telegram-api</a></div>
        <div class="repo-card__lang-info">
          <span class='repo-card__lang-color'></span>
          <span class='repo-card__lang-text'>Javascript</span>
        </div>
      </div>
  );
}

export default Repo;
