import React, { Component } from 'react';
import logo from './logo.svg';
import './content/App.css';
import NavigationBar from './components/NavigationBar';
import AboutTab from './components/AboutTab';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import HomeTab from './components/HomeTab';
import Footer from './components/Footer';
import meetup from './images/meetup.JPG';
import sellout from './images/sellout.JPG';

class App extends Component {
  // Constructor to set initial states
  constructor(props){
    super(props);
    this.state = {
      view: "home",
      loggedOn: false
    }
  };

  // Change tabs onClick from Navbar
  changeTab = (tabName) => {
    this.setState({view: [tabName]});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar
            changeTabHome={() => this.changeTab("home")}
            changeTab1={() => this.changeTab("tab1")}
            changeTab2={() => this.changeTab("tab2")}
            changeTab3={() => this.changeTab("tab3")}
            changeAbout={() => this.changeTab("about")}
          />
        </header>
        <body>

          {(this.state.view == "home") && <HomeTab />}
          {(this.state.view == "tab1") && <Tab1 />}
          {(this.state.view == "tab2") && <Tab2 />}
          {(this.state.view == "tab3") && <Tab3 />}
          {(this.state.view == "about") && <AboutTab />}
        </body>
        <footer>
          <img src={meetup} className="meetup"/>
          <img src={sellout} className="meetup"/>
          <Footer />
        </footer>
      </div>
    );
  }
}


export default App;
