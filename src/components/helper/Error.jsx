import { h, Component } from 'preact';
import './Error.less';

class Error extends Component {
  render({repos}) {
      return (
        <div className="error">
          <h1>Error</h1>
          <p>Something went wrong</p>
        </div>
      );
  }
}

export default  Error;
