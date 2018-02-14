import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component {
  render() {
    return (
      <div className="tooltip">
        {<this.props.children />}
      </div>
    );
  }
}

export default Tooltip;
