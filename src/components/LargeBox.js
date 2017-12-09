import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import siteData from '../data/songs10-1.json'
import Box from './Box'
import Sidebar from './sidebar/Sidebar.js';
import LeftArrow from '../img/arrow-l-line.svg';
import Close from '../img/icn_close.svg';

import Modal from 'react-modal';

export default class SmallBox extends Component {
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
    // console.log('open', el)
    this.setState({ 
      showModal: true,
      currentSong: el
    });
  }
  
  handleCloseModal () {
    // console.log('close')
    this.setState({ showModal: false });
  }

  componentDidMount() {
    // console.log('large', this.state)
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
          <div className="button" onClick={this.handleCloseModal}><img src={Close} alt="close modal" /></div>
          <Sidebar 
            title={this.state.currentSong.title}
            artist={this.state.currentSong.artist}
            description={this.state.currentSong.description}
            _id={this.state.currentSong._id}
            songURL={this.state.currentSong.songURL}
          />
        </Modal>

        <div className="song-list grid">
          {this.state.data.songs.map((el) => {
            return (
              <div className="large-box grid-box opacity" key={el._id}>
                <LazyLoad once={el.once} key={el._id} height={200} offset={[-200, 0]}>
                  <Box 
                    onClick={ ((e) => this.handleOpenModal(e, el)) } 
                    songId={el._id} 
                    imgUrl={el.imgURL}
                  />
                </LazyLoad>
              </div>
            )
          })}
        </div>
        <div className="page-navigation">
          <Link to="/20-11">
            <div className="page-link">
              <img src={LeftArrow} alt="previous page"/>
              <p>20-11</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}


//======= get these components=================

// https://github.com/jasonslyvia/react-lazyload/blob/master/examples/pages/placeholder.js