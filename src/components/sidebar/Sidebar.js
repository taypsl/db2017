import React, { Component } from 'react';

export default class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="close"></div>
        <div className="player"></div>
        <div className="song-title-wrapper">
        	<div className="number">{this.props._id}</div>
        	<div className="title">
        		<div className="song-title">{this.props.title}</div>
        		<div className="artist">{this.props.artist}</div>
        	</div>
        	<hr />
        	<p className="description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

