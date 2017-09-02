import { h } from 'preact';
import './Progress.less';
const Progress = ({ children,...props }) => {
  const {user} =props;
    return(
      <div>
        Loading...Please wait
      </div>
  );
}

export default Progress;
