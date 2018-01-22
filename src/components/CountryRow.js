import React, { Component } from 'react';
import Flag from '../components/Flag';

class CountryRow extends Component {
  render() {
    return (
      <tr className="CountryRow">
        <td style={{textAlign: "right"}}>
          {this.props.rank}
        </td>
        <td><Flag code={this.props.code}/></td>
        <td
          className="bold"
          style={{
            textAlign: "left"
        }}>{this.props.code}</td>
        <td>{this.props.gold}</td>
        <td>{this.props.silver}</td>
        <td>{this.props.bronze}</td>
        <td className="bold">{this.props.total}</td>
      </tr>
    );
  }
}

export default CountryRow;
