import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import Box from './Box'

import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '0',
    right                 : '0',
    bottom                : 'auto',
    marginLeft            : '0',
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    console.log('open')
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
  	console.log('close')
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="App-wrapper">
	      <Modal 
	      	isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
	      >
	      	<button onClick={this.handleCloseModal}>Close Modal</button>
	      </Modal>
      </div>
    );
  }
}
export default App;
//======= get these components=================

// https://github.com/jasonslyvia/react-lazyload/blob/master/examples/pages/placeholder.js