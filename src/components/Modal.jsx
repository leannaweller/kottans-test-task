import { h, Component } from 'preact';
import './Modal.less';

class Modal extends Component {
  constructor(props){
    super(props);
  }
  render({open,onClose,children}) {
    let modalStyle = {display: open ? 'block' : 'none'};
      return (
        <div id="myModal" class="modal" style = {modalStyle}>
        <div class="modal-content">
          <span class="close" onClick={onClose}>&times;</span>
          {children}
        </div>

      </div>
      );
  }
}

export default Modal;
