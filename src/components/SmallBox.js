import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import Box from './Box'
import siteData from '../data/songs50-21.json'
import ReactGA from 'react-ga';

import Modal from 'react-modal';
import Sidebar from './sidebar/Sidebar.js';
import Close from '../img/icn_close.svg';
// import RightArrow from '../img/arrow-r-line.svg';
import RightArrow from '../img/arrow-r_1@2x.png';
import LeftArrow from '../img/arrow-l_1@2x.png'

import ReactHtmlParser from 'react-html-parser';

class SmallBox extends Component {
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
    ReactGA.event({
      category: 'Navigation',
      action: 'Selected',
      
    });
  }
  
  handleCloseModal () {
  	// console.log('close')
    this.setState({ showModal: false });
  }

  componentDidMount() {
    // console.log('small', this.state.data)
  }

  // handleClick() {
  //   ReactGA.event({
  //     category: 'Navigation',
  //     action: 'Clicked Link',
  //   });
  // }

  render() {
    const JSONdesc = this.state.currentSong.description;
    const newDesc = ReactHtmlParser(JSONdesc);
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
	      		description={newDesc}
	      		_id={this.state.currentSong._id}
	      		songURL={this.state.currentSong.songURL}
	      	/>
          <div className="Modal-background"></div>
	      </Modal> 

        <div className="song-list grid">
          {this.state.data.songs.map((el) => {
            return (
              <div className="small-box grid-box opacity" key={el._id}>
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
        <div className="page-navigation">
          <Link className="page-link-group" to="/">
            <div className="page-link">
              <img src={LeftArrow} alt="previous page"/>
              <p>Intro</p>
            </div>
          </Link>
          <Link className="page-link-group" to="/20-11">
            <div className="page-link">
              <img src={RightArrow} alt="next page"/>
              <p>20-11</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default SmallBox;
//======= get these components=================

// https://github.com/jasonslyvia/react-lazyload/blob/master/examples/pages/placeholder.js

/*
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import Box from './Box'
import siteData from '../data/songs50-21.json'

import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '0',
    right                 : '0',
    bottom                : 'auto',
    marginLeft            : '0',
  }
};

class SmallBox extends Component {
  constructor() {
    super();
    this.state = {
      data: siteData,
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

  componentDidMount() {
    console.log('small', this.state.data)
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
	      </Modal>

        <div className="song-list grid">
          {this.state.data.songs.map((el) => {
            return (
              <div className="small-box grid-box opacity" key={el._id}>
                <LazyLoad once={el.once} key={el._id} height={200} offset={[-200, 0]}>
                  <Box 
                  	songId={el._id} 
                  	imgUrl={el.imgURL}
                  	onClick={this.handleOpenModal} 
                  />
                </LazyLoad>
              </div>
            )
          })}
        </div>
        <a href="/20-11">20-11</a>
      </div>
    );
  }
}
export default SmallBox;
//======= get these components=================

// https://github.com/jasonslyvia/react-lazyload/blob/master/examples/pages/placeholder.js

*/