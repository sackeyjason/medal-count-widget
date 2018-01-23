import React, { Component } from 'react';

const flagSpriteMap = {
  "AUT": 0,
  "BLR": 1,
  "CAN": 2,
  "CHN": 3,
  "FRA": 4,
  "GER": 5,
  "ITA": 6,
  "RUS": 7,
  "NOR": 8,
  "NED": 9,
  "SUI": 10,
  "SWE": 11,
  "USA": 12
};
const flagHeight = 17;

class Flag extends Component {
  getStyle() {
    const yCoordinate = -1 * flagHeight * flagSpriteMap[this.props.code];
    return {
      backgroundPosition: "0 " + yCoordinate + "px"
    }
  }
  render() {
    return (
      <div
        style={this.getStyle()}
        className="Flag">
      </div>
    );
  }
}

export default Flag;
