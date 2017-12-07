import React, { Component } from 'react';
import VideoPlayer from './Player.js';

export default class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">
        <div className="close"></div>
        <div className="player-container">
          <VideoPlayer url={this.props.songURL} />
        </div>
        <div className="song-title-wrapper">
        	<div className="sidebar-number">{this.props._id}</div>
        	<div className="sidebar-title">
        		<div className="sidebar-song-title">{this.props.title}</div>
        		<div className="sidebar-artist">{this.props.artist}</div>
        	</div>
        </div>
        <hr className="sidebar-line" />
        <p className="sidebar-description">{this.props.description}</p>
      </div>
    );
  }
}

