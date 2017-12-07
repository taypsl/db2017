import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import siteData from '../data/songs10-1.json'
import Box from './Box'

export default class SmallBox extends Component {
  constructor() {
    super();
    this.state = {
      data: siteData
    };
  }

  componentDidMount() {
    console.log('large', this.state)
  }

  render() {
    return (
      <div className="grid">
        <div className="song-list row">
          {this.state.data.songs.map((el) => {
            return (
              <div className="large-box grid-box opacity" key={el._id}>
                <LazyLoad once={el.once} key={el._id} height={200} offset={[-200, 0]}>
                  <Box songId={el._id} imgUrl={el.imgURL}/>
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