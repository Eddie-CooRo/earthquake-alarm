import React, { Component } from 'react';
import './Navbar.css';

import GridItem from '../pub/GridItem';
import NavbarHamIcon from './Navbar.hamIcon';
import Profile from './Navbar.profile';
import { MdAccessAlarm } from 'react-icons/lib/md';

class Navbar extends Component {
  state = {
    isOpen: null
  };

  menuStyles = {};

  handleMenuToggle = () => {
    this.stateClass = !this.state.isOpen ? 'open' : 'close';
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeMenu = () => {
    this.stateClass = 'close';
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div id="navbar" className={this.stateClass}>
        <div
          id="overlay"
          className={this.stateClass}
          onClick={this.closeMenu}
        />
        <div id="navbar-menu">
          <div id="navbar-items">
            <NavbarHamIcon
              isOpen={this.state.isOpen}
              onClick={this.handleMenuToggle}
            />
            <GridItem
              icon={Profile}
              isOpen={this.state.isOpen}
              hover={{
                backgroundColor: "#5c5c5c"
              }}
              gridArea="profile"
              size="xlg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
