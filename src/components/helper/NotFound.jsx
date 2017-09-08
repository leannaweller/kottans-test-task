import { h, Component } from 'preact';

class NotFound extends Component {
  render({repos}) {
      return (
        <div class="repos">
          404 Not found...
        </div>
      );
  }
}

export default  NotFound;
