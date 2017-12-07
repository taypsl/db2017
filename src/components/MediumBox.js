import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import Box from './Box'
import siteData from '../data/songs20-11.json'

export default class MediumBox extends Component {
  constructor() {
    super();

    // const id = uniqueId();
    this.state = {
      data: siteData
    };
  }

  componentDidMount() {
    console.log('medium', this.state)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="song-list grid">
          {this.state.data.songs.map((el) => {
            return (
              <div className="medium-box grid-box opacity" key={el._id}>
                <LazyLoad once={el.once} key={el._id} height={200} offset={[-200, 0]}>
                  <Box songId={el._id} imgUrl={el.imgURL}/>
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