import React, { Component } from 'react';
import brian from '../images/brian.jpg';
import green from '../images/greentech.jpg';
import beer from '../images/beer.jpg';
import health from '../images/health.jpg';

class AboutTab extends Component {
  constructor(props) {
     super(props);

     this.state = {
     };
 }

 render() {
     return (
        <div className="homeTab">
          <div className="homeBanner">
            <h1>What do you love?</h1>
            <h2>Do more of it with Veteran App</h2>
            <div className="signUpButton">
              <a>
                <p>Sign Up</p>
              </a>
            </div>
          </div>
          <div className="homeActivities">
            <p>Join a movement</p>
            <p>Learn to hunt</p>
            <p>Train for a marathon</p>
            <p>Build a mobile app</p>
            <p>Hike a mountain</p>
            <p>Practice a language</p>
          </div>
          <hr/>
          <div>
            <h2>Popular Meetups Nearby</h2>
            <div className="meetupSplit">
              <div className="homeMeetup">
                <img className="eventImage" src={beer} />
                <div>

                  <h2>Community Games and Beer!</h2>
                  <div className="homeImageSplit">
                    <img className="userImage" src={brian} />
                    <div className="homeTextSplit">
                      <p>   Hosted by Sonam Ghosh</p>
                      <p>From BU SASE, Boston</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homeMeetup">
                <img className="eventImage" src={green} />
                <div>
                  <h2>Green tech Entrepreneur Forum & Brainstorming.</h2>
                  <div className="homeImageSplit">
                    <img className="userImage" src={brian} />
                    <div className="homeTextSplit">
                      <p>Hosted by Nicole Chen</p>
                      <p>From BU Green Club, Boston</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homeMeetup">
                <img className="eventImage" src={health} />
                <div>
                  <h2>Mental Health and Imposter Syndrome at Work: Panel</h2>
                  <div className="homeImageSplit">
                    <img className="userImage" src={brian} />
                    <div className="homeTextSplit">
                      <p>Hosted by Mariah Buccat</p>
                      <p>From BU Health Club, Boston</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
 }
}

export default AboutTab;
