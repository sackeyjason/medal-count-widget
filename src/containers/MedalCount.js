import React, { Component } from 'react';
import * as mj from '../utils/medals.json';

let metalSource = "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";

class MetalCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: true,
      medalData: mj,
      sort: props.sort
    }
  }

  handleClick(event) {

  }

  getResultTable() {
    return (
      <table>
        <thead>
          <tr>
            <td colspan="3"></td>
            <td>gold</td>
            <td></td>
            <td></td>
            <td>total</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.medalData.slice(0, 10).map((x, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>FLAG</td>
                  <td>{x.code}</td>
                  <td>{x.gold}</td>
                  <td>{x.silver}</td>
                  <td>{x.bronze}</td>
                  <td>{x.gold + x.silver + x.bronze}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    );
  }
  render() {
    let result = this.state.hasLoaded ?
      this.getResultTable(): 
      <span>Loading</span>
    return (
      <div className="MetalCount" id={this.props.element_id}>
        <h2>Medal Count</h2>
        {result}
      </div>
    );
  }
}

export default MetalCount;
