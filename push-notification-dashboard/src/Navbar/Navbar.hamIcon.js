import React, { Component } from 'react';
import './Navbar.hamIcon.css';

class NavbarHamIcon extends Component {
  render() {
    const stateClass = this.props.isOpen ? 'open' : 'close';
    return (
      <div id="ham-icon-container" onClick={this.props.onClick}>
        <div id="ham-icon" className={stateClass}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

export default NavbarHamIcon;
