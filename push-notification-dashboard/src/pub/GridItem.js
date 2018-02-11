import React, { Component } from 'react';
import './GridItem.css';
import Interactive from 'react-interactive';

class GridItem extends Component {
  constructor(props) {
    super(props);

    this.iconStyle = {
      color: this.props.color || '#555'
    };

    this.hoverStyle = {
      backgroundColor: this.props.hoverBkColor || '#d6d6d6'
    };
  }
  render() {
    const Icon = this.props.icon;
    const badgeCount = this.props.badgeCount;

    console.log(this.props.gridArea);
    return (
      <Interactive
        as="span"
        className="grid-item"
        id={this.props.id}
        onClick={this.props.onClick}
        hover={this.hoverStyle}
        style={{
          gridArea: this.props.gridArea
        }}
      >
      
        <Icon className="grid-item-icon" style={this.iconStyle} />
        {!!badgeCount ? <span className="badge">{badgeCount}</span> : null}
      </Interactive>
    );
  }
}

export default GridItem;
