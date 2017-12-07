import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class VideoPlayer extends Component {
  render () {
    return (
    	<ReactPlayer 
    		url={this.props.url}
    		width="362px"
    		height="240px"
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