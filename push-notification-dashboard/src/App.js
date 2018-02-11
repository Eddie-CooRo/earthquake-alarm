import React, { Component } from 'react';
import './App.css';
import TopMenu from './TopMenu/';
import Navbar from './Navbar/index';
import { push as Menu } from 'react-burger-menu';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="navbar-container">
          <Navbar />
        </div>
        <div id="topmenu-container">
          <TopMenu />
        </div>
      </div>
    );
  }
}

export default App;
