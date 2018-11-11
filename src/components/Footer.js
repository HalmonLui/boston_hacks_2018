import React, { Component } from 'react';
class Footer extends Component {
  constructor(props) {
     super(props);

     this.state = {
         username: '',
         load: false
     };
 }

 render() {
     return (
        <div className="Footer">
          <p>&copy; {new Date().getFullYear()} Veteran App. ALL RIGHTS RESERVED. </p>
          <div className="footerContainer">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
     );
 }
}

export default Footer;
