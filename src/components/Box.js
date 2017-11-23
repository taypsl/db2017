import React, { Component } from 'react';
import '../css/App.css';

export default class Box extends Component {
  render() {
    return (
    	<div className="box">
    		<img src={this.props.imgUrl} alt={this.props.songId}/>
    		<h1>{this.props.songId}</h1>
    	</div>
  	)
  }
}

