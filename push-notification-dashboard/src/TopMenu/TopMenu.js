import React, { Component } from 'react';
import {
  MdNotifications,
  MdChat,
  MdSettings,
  MdPowerSettingsNew,
  MdZoomOutMap,
} from 'react-icons/lib/md';
import {} from 'react-icons/lib/fa';
import './TopMenu.css';

import TopMenuSearchForm from './TopMenu.searchForm';
import GridItem from '../pub/GridItem';

class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">
        <TopMenuSearchForm />
        <GridItem icon={MdZoomOutMap} id="first-right" />
        <GridItem icon={MdNotifications} badgeCount={2}/>
        <GridItem icon={MdChat} />
        <GridItem icon={MdSettings} />
        <GridItem icon={MdPowerSettingsNew} />
      </div>
    );
  }
}

export default TopMenu;
