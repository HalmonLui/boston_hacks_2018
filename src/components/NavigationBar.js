import React, { Component } from 'react';
import AgAutocomplete from 'react-algoliasearch';
import logo from '../images/logo.png';


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
            <img src={logo} className="logo" />
          </a>

          <div>
            <form>
            <AgAutocomplete
              apiKey={"6dc685dc57968d5a67e816916887382c"}
              appId={"F7HFR1MH0G"}
              displayKey="name"
              indices={[{index: 'activities'}]}
              inputId="input-search"
              placeholder="Search Activities..."
              keyName="name"
              hitsPerPage="10"
              selected={this.suggestionSelected}
              options={{autoselectOnBlur: true, hint: true, debug: false}}
            />
            </form>
          </div>
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
