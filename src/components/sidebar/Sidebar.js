import React, { Component } from 'react';
import '../css/App.css';

export default class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="close"></div>
        <div className="player"></div>
        <div className="song-title-wrapper">
        	<div className="number"></div>
        	<div className="title">
        		<div className="song-title">{this.props.title}</div>
        		<div className="artist">{this.props.title}</div>
        	</div>
        	<hr />
        	<p className="description">this.props.description</p>
        </div>
      </div>
    );
  }
}

