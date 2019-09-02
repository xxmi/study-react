import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Modal.less'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.container = document.querySelector('#modal-root')
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.container)
    }
}

export default class ModalExample extends Component {
    state = {show: false};

    render() {
        return (
            <div>
                <button onClick={() => this.setState({show: !this.state.show})}>显示 Modal Dialog</button>
                {
                    this.state.show ? <Modal>
                        <div className="modal-container">
                            <div className="modal-content">
                                <h1> Modal Dialog</h1>
                            </div>
                        </div>
                    </Modal> : null
                }
            </div>
        )
    }
}