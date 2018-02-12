import React, { Component } from 'react';
import './Navbar.profile.css';

class NavbarProfile extends Component {
  render() {
    const stateClass = this.props.isOpen ? 'open' : 'close';
    return (
      <div className={'profile-container ' + stateClass}>
        <div className="profile-image" />
        <div className="profile-details">
          <p className="profile-username">Eddie CooRo</p>
        </div>
      </div>
    );
  }
}

export default NavbarProfile;
