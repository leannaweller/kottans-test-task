import { h } from 'preact';
import * as utils from '../../utils';
import CustomPieChart from './PieChart.jsx';
import './RepoDetails.less';

const RepoDetails = ({ children,...props }) => {
  const {contributors,langs,name,html_url,parent,prs} = props.selected;
  const _contributors = contributors ? contributors.map(item => {return {key:item.login, value:item.contributions}}) : null;
  const hasLangs = langs && langs.length;
  const hasPrs = prs && prs.length;
  const hasContributors = contributors && contributors.length;
  console.log(langs,contributors);
    return(
      <div class="repo-details">
        <h3>{name}</h3>
        <div className="repo-links">
          <strong>Repo:</strong> <a href={html_url}>{name}</a>
          {
            parent &&
            <div>
              <strong>Fork:</strong> <a href={parent.html_url}>{parent.name}</a>
            </div>
          }
        </div>
        <div className="piecharts">
          <div className="piechart-wrapper">
              <h4>Languages</h4>
              {
                hasLangs ?
                <CustomPieChart
                data={langs}/>:
                <h5>Has no langs</h5>
              }
          </div>
          <div className="piechart-wrapper">
              <h4>Contributors</h4>
              {
                hasContributors ?
                <CustomPieChart
                data={_contributors}/>
              :
                <h5>Has no contributors</h5>
              }

          </div>
        </div>
        <div className="prs">
          <h4>Pull requests</h4>
          {
            hasPrs ?
            <ul>
              {
                prs.map(pr => <li><a href={pr.html_url}>{pr.title}</a></li>)
              }
            </ul>
            :
            <h5>Has no prs</h5>
          }
        </div>
      </div>
  );
}

export default RepoDetails;
