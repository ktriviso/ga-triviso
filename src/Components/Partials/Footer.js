import React, {Component} from 'react';
import Modal from './Modal.js';

export default class Footer extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleModal(){
        this.setState({showModal: true})
    }

    render() {

        const modalHtml = this.state.showModal ?
        <Modal>
                <div id="modal">hi im a modal</div>
        </Modal>
        : null;

        return (
            <footer id="footer">
                <hr className="divider"/>
                <ul>
                    <li className="icons"><a href="https://github.com/ktriviso" type="link"><i className="fa fa-github"></i></a></li>
                    <li className="icons"><a href="https://codepen.io/ktriviso/" type="link"><i className="fa fa-codepen" aria-hidden="true"></i></a></li>
                    <li className="icons"><a href="https://www.linkedin.com/in/krista-triviso-a804b9128/" type="link"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li className="icons"><a href="https://repl.it/@KristaTriviso" type="link"><i className="fa fa-terminal"></i></a></li>
                    <li className="icons" id="invert"><i className="fa fa-info"></i></li>
                    <li className="icons" id="trump" onClick={this.handleModal.bind(this)}><i className="fa fa-thumbs-down"></i></li>
                </ul>
                {modalHtml}
            </footer>
        )
    }
}
