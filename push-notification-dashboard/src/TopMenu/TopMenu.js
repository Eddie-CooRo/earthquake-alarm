import React, { Component } from 'react';
import {
  MdNotifications,
  MdChat,
  MdSettings,
  MdPowerSettingsNew,
  MdZoomOutMap
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
        <GridItem
          icon={MdZoomOutMap}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
          id="first-right"
        />
        <GridItem
          icon={MdNotifications}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
          badgeCount={3}
        />
        <GridItem
          icon={MdChat}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
        />
        <GridItem
          icon={MdSettings}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
          badgeCount={1}
        />
        <GridItem
          icon={MdPowerSettingsNew}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
        />
      </div>
    );
  }
}

export default TopMenu;
