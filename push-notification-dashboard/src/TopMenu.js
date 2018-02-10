import React, { Component } from "react";
import style from './TopMenu.css';

class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">
        <div className="hamburger"></div>
        <form action="#" method="POST" id="top-menu-search-form">
          <input type="search" />
          <input type="submit" />
        </form>
        <span className="top-menu-item"></span>
        <span className="top-menu-item"></span>
        <span className="top-menu-item"></span>
        <span className="top-menu-item"></span>
        <span className="top-menu-item"></span>
      </div>
    );
  }
}

export default TopMenu;
