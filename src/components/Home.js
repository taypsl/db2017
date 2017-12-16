import React, { Component } from 'react';
// import Title from '../img/title.svg';
// import RightArrow from '../img/arrow-r-line.svg';
import RightArrow from '../img/arrow-r_1@2x.png'

import { Link } from 'react-router-dom';
import '../css/App.css';
import FadeIn from 'react-fade-in';
import titleA from '../img/titleA.svg';
import titleB from '../img/titleB.svg';
import titleC from '../img/titleC.svg';
// import { Parallax } from 'react-parallax';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <FadeIn>
        <div className="Img-float img-one">
          <img src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_431/v1513233061/dbrad2017/medium/best_songs_2017_migos.jpg" alt="Migos" />
        </div>

        <div className="Img-float img-two">
          <img src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_461/v1513233229/dbrad2017/medium/best_songs_2017_lorde_2.jpg" alt="Lorde" />
        </div>

        <div className="Img-float img-three">
          <img src="http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_412/v1513372384/dbrad2017/small/best_songs_2017_yaeji.png" alt="Yaeji" />
        </div>

        <div className="Body">

          <section className="Section section-one">
            <div class="Home-title-wrapper">
              <div class="Home-title-a"><img src={titleA} alt="D-Brad's"/></div>
              <div class="Home-title-b"><img src={titleB} alt="Best Songs"/></div>
              <div class="Home-title-c"><img src={titleC} alt="of 2017"/></div>
            </div>
            <p className="Home-text">
              {`When life is terrible, music is always there as a buoy 
                to hold you up or a companion to understand you. It can 
                provide encouragement, escape, respite, validation, 
                catharsis. And man, we needed it in 2016.
                `}
            </p>
            <p className="Home-text">
              {`The year’s music, as it always does, took all shapes and 
                sizes. We welcomed back the beloved (Radiohead, Bon Iver), 
                became acquainted with genre-bending stars-in-the-making 
                (Anderson .Paak, Kaytranada), and entrusted indie rock in 
                the hands of promising young storytellers (Car Seat 
                Headrest, Pinegrove). The very top of the rap food chain 
                graced us with new tracks (Kanye West, Drake, Kendrick 
                Lamar), as well as up-and-coming rappers coming to take 
                their throne (Chance the Rapper, Joey Purp, Kamaiyah, YG, 
                Rae Sremmurd). Knowles sisters dazzled (Beyoncé, Solange), 
                pop stars sizzled (Rihanna, Bruno Mars, Ariana Grande), 
                and recluses reemerged (Frank Ocean, The Avalanches). 
                Rock is not dead, whether you want your proof in classic 
                form (Whitney, Steve Gunn, Angel Olsen), pop form 
                (Chairlift, Japanese Breakfast), or rip-roaring riff form 
                (Sheer Mag, Bent Shapes). And iconic, legendary artists 
                bid their last, brilliant farewells (David Bowie, A Tribe 
                Called Quest). Ten, twenty, fifty years from now, these 
                songs from 2016 will probably remind me of pain, but I 
                think those feelings of pain will be accompanied by the 
                good memories that filled the cracks this year.
                `}
            </p>
          </section>

          <div className="Section-links">
            <p><a className="section-link" href="https://open.spotify.com/user/dbradford07/playlist/15joJn2tsZ1WnHDU6EuPZy" target="_blank" rel="noopener noreferrer">listen on SPOTIFY</a></p>
            <p><a className="section-link" href="https://www.youtube.com/watch?v=y-JqH1M4Ya8&list=PLqpBLIvY2a6fXLC_reHyITdFDXWreKHo6" target="_blank" rel="noopener noreferrer">listen on YOUTUBE</a></p>
          </div>

          <section className="Section-two">
            <h1>HONORABLE MENTIONS</h1>
            <ul className="hm-text">
              <li>Hamilton Leithauser + Rostam: “A 1000 Times”</li>
              <li>Chairlift: “Moth to the Flame”</li>
              <li>Mothers: “It Hurts Until It Doesn’t”</li>
              <li>Hamilton Leithauser + Rostam: “A 1000 Times”</li>
              <li>Chairlift: “Moth to the Flame”</li>
              <li>Mothers: “It Hurts Until It Doesn’t”</li>
              <li>Hamilton Leithauser + Rostam: “A 1000 Times”</li>
              <li>Chairlift: “Moth to the Flame”</li>
              <li>Mothers: “It Hurts Until It Doesn’t”</li>
              <li>Hamilton Leithauser + Rostam: “A 1000 Times”</li>
              <li>Chairlift: “Moth to the Flame”</li>
              <li>Mothers: “It Hurts Until It Doesn’t”</li>
              <li>Hamilton Leithauser + Rostam: “A 1000 Times”</li>
              <li>Chairlift: “Moth to the Flame”</li>
              <li>Mothers: “It Hurts Until It Doesn’t”</li>
            </ul>
          </section>

          <section className="Section Section-three">
            <p className="Home-text">
              {`I hope the songs on this list either made a lasting 
                impact on you this year, or that they will in the 
                coming year as you check them out. I love celebrating 
                good music and sharing in that celebration, so please 
                comment freely about songs you love (or don’t love) 
                and let’s talk about it.
                `}
            </p>
            <p className="Home-text">
              {`And now, here we go.`}
            </p>
          </section>

          <div className="page-navigation-home">
            <Link to="/50-21">
              <div className="page-link">
                <img src={RightArrow} alt="next page" />
                <p>50-21</p>
              </div>
            </Link>
          </div>
            
        </div>
        </FadeIn>
      </div>
    );
  }
}

export default Home;

/* 
        <FadeIn>  
          <div className="Home-wrapper">
            <div className="Home-title">
              <img src={Title} alt="David Bradford's Best Songs of 2017" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p> 
            <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <div className="page-navigation-home">
              <Link to="/50-21">
                <div className="page-link">
                  <img src={RightArrow} alt="next page" />
                  <p>50-21</p>
                </div>
              </Link>
            </div>
          </div>
        </FadeIn>
*/