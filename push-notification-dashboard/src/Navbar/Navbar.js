import React, { Component } from 'react';
import './Navbar.css';

import Morph from 'react-svg-morph';
import { MdMenu } from 'react-icons/lib/md';

import GridItem from '../pub/GridItem';

class Navbar extends Component {
  state = {
    isOpen: null
  };

  menuStyles = {};

  handleMenuToggle = () => {
    this.menuClasses = !this.state.isOpen ? 'isOpen' : 'isClosed';
    this.hamClasses = !this.state.isOpen ? 'open' : 'close';
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div id="navbar" className={this.menuClasses}>
        <div id="navbar-menu">
          {/* <GridItem
              key = "openMenu"
              gridArea="toggleButton"
              icon={MdMenu}
              onClick={this.handleMenuToggle}
              color="#dcdcdc"
              hoverBkColor="#5c5c5c"
            /> */}
          <div id="ham-icon-container" onClick={this.handleMenuToggle}>
            <div id="ham-icon" className={this.hamClasses}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
