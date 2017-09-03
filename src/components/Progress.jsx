import { h } from 'preact';
import './Progress.less';
const Progress = ({ children,...props }) => {
  const {progress,type} = props;
    return(
      <div>
        Loading {calcProgess(progress,type)}%...Please wait
      </div>
  );
}
const calcProgess = (progress,type) => {
  let _progress = 0;
  if(type == 'all'){
    _progress = (progress.repos_progress+progress.user_progess)/2;
  }else{
    if(type == 'user'){
      _progress = progress.user_progess;
    }else{
      _progress = progress.repos_progess;
    }
  }
  return _progress;
}
export default Progress;
