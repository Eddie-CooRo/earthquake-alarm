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
import NotifBox from './TopMenu.NotificationBox';
import GridItem from '../pub/GridItem';

class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">
        <TopMenuSearchForm />
        <GridItem
          Icon={MdZoomOutMap}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
          id="first-right"
        />
        <GridItem
          Icon={MdNotifications}
          TooltipContent={NotifBox}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
          badgeCount={3}
        />
        <GridItem
          Icon={MdChat}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
        />
        <GridItem
          Icon={MdSettings}
          hover={{
            backgroundColor: '#d6d6d6',
            cursor: 'pointer'
          }}
          badgeCount={1}
        />
        <GridItem
          Icon={MdPowerSettingsNew}
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
