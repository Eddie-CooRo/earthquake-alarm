import React, { Component } from 'react';
import './GridItem.css';
import Interactive from 'react-interactive';

class GridItem extends Component {
  constructor(props) {
    super(props);

    this.iconStyle = {
      color: this.props.color || '#555'
    };

    this.sizeMap = {
      sm: '29%',
      md: '19%',
      lg: '9%',
      xlg: '0%'
    };
  }
  render() {
    let {
      hover,
      icon,
      gridArea,
      badgeCount,
      size,
      style,
      onClick,
      id,
      className,
      ...rest
    } = this.props;

    const Icon = icon;
    const padding = this.sizeMap[size] || this.sizeMap['sm'];
    const hoverStyle = {
      ...hover
    }
    const classNames = "grid-item " + className ? className : '';
    return (
      <Interactive
        as="span"
        id={id}
        className={classNames}
        onClick={onClick}
        hover={hoverStyle}
        style={{
          gridArea,
          padding,
          ...style
        }}
      >
        <Icon className="grid-item-icon" style={this.iconStyle} {...rest} />
        {!!badgeCount ? (
          <span data-badge={badgeCount} className="badge" />
        ) : null}
      </Interactive>
    );
  }
}

export default GridItem;
