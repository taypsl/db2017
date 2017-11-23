import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

// import logo from './logo.svg';
import '../css/App.css';
// import Navbar from './navbar.js'

// import Widget from '../components/widget';
// import { uniqueId } from '../utils';
import siteData from '../data/songs10-1.json'

export default class SmallBox extends Component {
  constructor() {
    super();

    // const id = uniqueId();
    this.state = {
      data: siteData
    };
  }

  componentDidMount() {
    console.log('large', this.state)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="song-list">
          {this.state.data.songs.map((el) => {
            return (
              <div className="large-box" key={el._id}>
                <LazyLoad once={el.once} key={el._id} height={200} offset={[-200, 0]}>
                  <h1>{el._id}</h1>
                </LazyLoad>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}


//======= get these components=================

// https://github.com/jasonslyvia/react-lazyload/blob/master/examples/pages/placeholder.js