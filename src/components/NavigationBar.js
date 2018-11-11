import React, { Component } from 'react';
class NavigationBar extends Component {
  constructor(props) {
     super(props);

     this.state = {
         username: '',
         load: false
     };
 }

 render() {
     return (
        <div className="navigationBar">
          <a onClick={this.props.changeTabHome} className="navTab">
            <p>Title Here</p>
          </a>
          <div id="blankNav">
          </div>
          <a onClick={this.props.changeTab1} className="navTab" id="newGroup">
            <p> Start a new group </p>
          </a>
          
          <a onClick={this.props.changeTab3} className="navTab" id="login">
            <p> Log in </p>
          </a>
          <a onClick={this.props.changeAbout} className="navTab" id="signUp">
            <p> Sign Up </p>
          </a>
        </div>
     );
 }
}

export default NavigationBar;
