import React, { Component } from 'react';
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
            <div className="homeMeetup">
              <p>Image Here</p>
              <div>
                <p>Date Here</p>
                <h2>Event Title</h2>
                <div>
                  <p>IMG</p>
                  <div>
                    <p>Hosted by PERSON</p>
                    <p>From Boston</p>
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
