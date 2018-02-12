import React, { Component } from 'react';
import './Navbar.css';

import GridItem from '../pub/GridItem';

class Navbar extends Component {
  state = {
    isOpen: null
  };

  menuStyles = {};

  handleMenuToggle = () => {
    this.menuClasses = !this.state.isOpen ? 'isOpen' : 'isClosed';
    this.stateClass = !this.state.isOpen ? 'open' : 'close';
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeMenu = ()=>{
    this.menuClasses = 'isClosed';
    this.stateClass = 'close';
    this.setState({isOpen: false});
  }

  render() {
    return (
      <div id="navbar" className={this.menuClasses}>
        <div id="overlay" className={this.stateClass} onClick={this.closeMenu}>
        </div>
        <div id="navbar-menu">
          <div id="ham-icon-container" onClick={this.handleMenuToggle}>
            <div id="ham-icon" className={this.stateClass}>
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
