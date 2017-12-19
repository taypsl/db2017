import React from 'react';

export default class Footer extends React.Component {
	render () {
		return (
			<div className="footer">
				<div className="footer-links-container">
					<div className="footer-links-item listen">
						<h4>LISTEN</h4>
						<div className="footer-link-div"><a className="footer-link" href="https://open.spotify.com/user/dbradford07/playlist/15joJn2tsZ1WnHDU6EuPZy" target="_blank" rel="noopener noreferrer">Spotify</a></div>
            <div className="footer-link-div"><a className="footer-link" href="https://www.youtube.com/watch?v=y-JqH1M4Ya8&list=PLqpBLIvY2a6fXLC_reHyITdFDXWreKHo6" target="_blank" rel="noopener noreferrer">YouTube</a></div>
					</div>
					<div className="footer-links-item follow">
						<h4>FOLLOW</h4>
						<div className="footer-link-div"><a className="footer-link" href="https://dbradmusic.com" target="_blank" rel="noopener noreferrer">D-Brad Music</a></div>
            <div className="footer-link-div"><a className="footer-link" href="https://twitter.com/catchadave" target="_blank" rel="noopener noreferrer">Twitter</a></div>
					</div>
				</div>
				<div className="bottom-span">
					<span>Extreme listing by <a className="footer-link" href="https://dbradmusic.com" target="_blank" rel="noopener noreferrer">dbradmusic.com</a></span> | 
					<span> Site by <a className="footer-link" href="http://taypsl.com" target="_blank" rel="noopener noreferrer">taypsl</a></span> | 
					<span> Made with <span aria-label="love" role="img">❤️ </span> + <span aria-label="pizza" role="img">🍕 </span> in Berkeley, CA ©2017</span>
				</div>
			</div>
		)
	}
}

//🎧