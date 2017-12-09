import React, { Component } from 'react';
import Title from '../img/title.svg';
import RightArrow from '../img/arrow-r-line.svg';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-wrapper">
        	<div className="Home-title"><img src={Title} alt="David Bradford's Best Songs of 2017" /></div>
        	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p> 
  		    <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          <div className="page-navigation-home">
            <Link to="/50-21">
              <div className="page-link">
                <img src={RightArrow} alt="next page"/>
                <p>50-21</p>
              </div>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Home;
