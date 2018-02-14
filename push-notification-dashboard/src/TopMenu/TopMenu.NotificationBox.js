import React, { Component } from 'react';
import { MdClose } from 'react-icons/lib/md';
import './TopMenu.NotificationBox.css';

import ScrollBar from 'react-custom-scrollbars';

class TopMenu extends Component {
  render() {
    const profileImageAddress =
      'http://' + window.location.host + '/img/img.jpg';
    return (
      <div className="notification-box">
        <ScrollBar
          style={{ width: '100%', height: '100%' }}
          hideTracksWhenNotNeeded={true}
        >
          <div className="notification">
            <div className="notification-image-container">
              <img
                className="notification-image"
                alt="notification"
                src={profileImageAddress}
              />
            </div>
            <MdClose className="notification-close" />
            <div className="notification-content">
              <h3>Hello! First notification</h3>
              <p>
                this notification is not important and simply you can igonre it!
              </p>
            </div>
          </div>

          <div className="notification">
            <div className="notification-image-container">
              <img
                className="notification-image"
                alt="notification"
                src={profileImageAddress}
              />
            </div>
            <MdClose className="notification-close" />
            <div className="notification-content">
              <h3>Hello! Second notification</h3>
              <p>
                this notification is not important and simply you can igonre it!
              </p>
            </div>
          </div>

          <div className="notification">
            <div className="notification-image-container">
              <img
                className="notification-image"
                alt="notification"
                src={profileImageAddress}
              />
            </div>
            <MdClose className="notification-close" />
            <div className="notification-content">
              <h3>Hello! Third notification</h3>
              <p>
                this notification is not important and simply you can igonre it!
              </p>
            </div>
          </div>

          <div className="notification">
            <div className="notification-image-container">
              <img
                className="notification-image"
                alt="notification"
                src={profileImageAddress}
              />
            </div>
            <MdClose className="notification-close" />
            <div className="notification-content">
              <h3>Hello! Forth notification</h3>
              <p>
                this notification is not important and simply you can igonre it!
              </p>
            </div>
          </div>

          <div className="notification">
            <div className="notification-image-container">
              <img
                className="notification-image"
                alt="notification"
                src={profileImageAddress}
              />
            </div>
            <MdClose className="notification-close" />
            <div className="notification-content">
              <h3>Hello! Fifth notification</h3>
              <p>
                this notification is not important and simply you can igonre it!
              </p>
            </div>
          </div>
        </ScrollBar>
      </div>
    );
  }
}

export default TopMenu;
