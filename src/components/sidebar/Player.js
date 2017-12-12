import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../css/App.css';


class VideoPlayer extends Component {
  render () {
    return (
    	<ReactPlayer 
    		url={this.props.url}
    		width="340px"
    		height="220px"
    	/>
  	)
  }
}

export default VideoPlayer;
/*
  facebook: {
    appId: '12345'
  }

	config={{
	  youtube: {
	    playerVars: { showinfo: 1 }
	  }
  }}

  https://www.npmjs.com/package/react-player
 */