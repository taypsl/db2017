import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import Box from './Box'
import siteData from '../data/songs50-21.json'

export default class SmallBox extends Component {
  constructor() {
    super();
    this.state = {
      data: siteData,
    };
  }

  componentDidMount() {
    console.log('small', this.state)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="song-list grid">
          {this.state.data.songs.map((el) => {
            return (
              <div className="small-box grid-box opacity" key={el._id}>
                <LazyLoad once={el.once} key={el._id} height={200} offset={[-200, 0]}>
                  <Box songId={el._id} imgUrl={el.imgURL}/>
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

//======= get these components=================

// https://github.com/jasonslyvia/react-lazyload/blob/master/examples/pages/placeholder.js