import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import Box from './Box'
import siteData from '../data/songs20-11.json'
import Sidebar from './sidebar/Sidebar.js';

import Modal from 'react-modal';

export default class MediumBox extends Component {
  constructor() {
    super();
    this.state = {
      data: siteData,
      showModal: false,
      currentSong: {}
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = (e, el) => {
    console.log('open', el)
    this.setState({ 
      showModal: true,
      currentSong: el
    });
  }
  
  handleCloseModal () {
    console.log('close')
    this.setState({ showModal: false });
  }

  componentDidMount() {
    console.log('medium', this.state)
  }

  render() {
    return (
      <div className="wrapper">
        <Modal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <Sidebar 
            title={this.state.currentSong.title}
            artist={this.state.currentSong.artist}
            description={this.state.currentSong.description}
            _id={this.state.currentSong._id}
          />  
        </Modal>

        <div className="song-list grid">
          {this.state.data.songs.map((el) => {
            return (
              <div className="medium-box grid-box opacity" key={el._id}>
                <LazyLoad once={el.once} key={el._id} height={200} offset={[-200, 0]}>
                  <Box 
                    songId={el._id} 
                    imgUrl={el.imgURL}
                    onClick={ ((e) => this.handleOpenModal(e, el)) } 
                  />
                </LazyLoad>
              </div>
            )
          })}
        </div>
        <a href="/50-21">50-21</a>
        <a href="/10-1">10-1</a>
      </div>
    );
  }
}


//======= get these components=================

// https://github.com/jasonslyvia/react-lazyload/blob/master/examples/pages/placeholder.js