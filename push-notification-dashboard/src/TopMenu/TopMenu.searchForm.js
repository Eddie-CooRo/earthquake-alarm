import React, { Component } from 'react';
import { MdSearch } from 'react-icons/lib/md';
import './TopMenu.searchForm.css';

class TopMenu extends Component {
  render() {
    return (
      <div id="top-menu-search-container">
        <form action="#" method="POST" id="top-menu-search-form">
          <input
            type="search"
            id="top-menu-search-input"
            placeholder="Search Something..."
          />
          <MdSearch id="top-menu-search-submit" />
        </form>
      </div>
    );
  }
}

export default TopMenu;
