import React, { Component } from 'react';

class MetalCount extends Component {
  render() {
    return (
      <div className="MetalCount" id={this.props.element_id}>
        <h2>Medal Count</h2>
      </div>
    );
  }
}

export default MetalCount;
