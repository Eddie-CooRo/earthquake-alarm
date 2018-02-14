import React, { Component } from 'react';
import './Navbar.profile.css';

class NavbarProfile extends Component {
  render() {
    const profileImageAddress = "http://" + window.location.host + "/img/img.jpg"
    const stateClass = this.props.isOpen ? 'open' : 'close';
    return (
      <div className={'profile-container ' + stateClass}>
        <div className="profile-image-container">
          <div className="profile-image" style={{backgroundImage:`url(${profileImageAddress})`}} />
        </div>
        <div className="profile-details">
          <p className="profile-username">Eddie CooRo</p>
        </div>
      </div>
    );
  }
}

export default NavbarProfile;
