import React, { Component } from 'react';
import * as mj from '../utils/medals.json';
import SortButton from '../components/SortButton';

let medalSource = "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";

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
    this.setState({
      sort: event.currentTarget.dataset.id
    })
  }

  getResultTable() {
    let sorter = (a, b) => {
      let sortOrder = this.state.sort;
      let tieBreaker = 'gold';
      let comparison;
      if (sortOrder === 'gold') {
        tieBreaker = 'silver';
      }
      if (sortOrder === 'total') {
        a.total = a.gold + a.silver + a.bronze;
        b.total = b.gold + b.silver + b.bronze;
      }
      comparison = b[sortOrder] - a[sortOrder];
      if (comparison !== 0) {
        return comparison;
      } else {
        return (b[tieBreaker] - a[tieBreaker]);
      }
    };

    return (
      <table style={{width: "100%"}}>
        <thead>
          <tr>
            <td colSpan="3"></td>
            <SortButton order="gold" clickHandler={this.handleClick.bind(this)}/>
            <SortButton order="silver" clickHandler={this.handleClick.bind(this)}/>
            <SortButton order="bronze" clickHandler={this.handleClick.bind(this)}/>
            <SortButton order="total" clickHandler={this.handleClick.bind(this)}/>
          </tr>
        </thead>
        <tbody>
          {
            this.state.medalData.sort(sorter).slice(0, 10).map((x, i) => (
                <tr key={i}>
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
