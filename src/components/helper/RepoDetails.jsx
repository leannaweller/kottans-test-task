import { h } from 'preact';
import * as utils from '../../utils';
import CustomPieChart from './PieChart.jsx';
import './RepoDetails.less';

const RepoDetails = ({ children,...props }) => {
  const {selected} = props;
  const contributors = (selected.data && selected.data.contributors) ? selected.data.contributors.map(item => {return {key:item.login, value:item.contributions}}) : [];
    return(
      <div class="repo-details">
        Repo:<a href={selected.data && selected.data.html_url}>{selected.data && selected.data.name}</a>
        {
          (selected.data && selected.data.parent) &&
          <div>
            Fork: <a href={selected.data.parent.html_url}>{selected.data.parent.name}</a>
          </div>
        }
        <div className="piecharts">
          <div className="piechart-wrapper">
            <CustomPieChart
            data={selected.data ? selected.data.langs : []}/>
          </div>
          <div className="piechart-wrapper">
            <CustomPieChart
            data={contributors}/>
          </div>
        </div>
        <div className="prs">
          <ul>
            {
              selected.data && selected.data.prs.map(pr => <li><a href={pr.html_url}>{pr.title}</a></li>)
            }
          </ul>
        </div>
      </div>
  );
}

export default RepoDetails;
