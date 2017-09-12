import { h } from 'preact';
import './Progress.less';
const Progress = ({ children,...props }) => {
  const {progress} = props;
    return(
      <div class="progress-indicator">
        {
          <h3>Loading {progress.progress}%...Please wait</h3>
        }

      </div>
  );
}

export default Progress;
