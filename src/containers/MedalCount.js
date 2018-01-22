import React, { Component } from 'react';
import CountryRow from '../components/CountryRow';
import SortButton from '../components/SortButton';
import Request from '../utils/Request';

// let source = "/medals.json";
let source = "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";

class MedalCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      medalData: {},
      sort: props.sort,
      error: false
    }
  }

  componentWillMount() {
    Request({
      url: source,
      success: (data) => {
        this.setState({
          hasLoaded: true,
          medalData: data
        });
      },
      error: data => {
        this.setState({
          error: {
            title: data.title,
            description: data.description
          }
        });
      }
    });
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
      <table className="MedalCount-table">
        <thead>
          <tr>
            <th className="col-rank"></th>
            <th className="col-flag"></th>
            <th className="col-code"></th>
            <SortButton
              order="gold"
              active={this.state.sort === "gold"}
              clickHandler={this.handleClick.bind(this)}/>
            <SortButton
              order="silver"
              active={this.state.sort === "silver"}
              clickHandler={this.handleClick.bind(this)}/>
            <SortButton
              order="bronze"
              active={this.state.sort === "bronze"}
              clickHandler={this.handleClick.bind(this)}/>
            <SortButton
              order="total"
              active={this.state.sort === "total"}
              clickHandler={this.handleClick.bind(this)}/>
          </tr>
        </thead>
        <tbody>
          {
            this.state.medalData.sort(sorter).slice(0, 10).map((x, i) => (
                <CountryRow
                  key={i}
                  rank={i + 1}
                  code={x.code}
                  gold={x.gold}
                  silver={x.silver}
                  bronze={x.bronze}
                  total={x.gold + x.silver + x.bronze} />
              )
            )
          }
        </tbody>
      </table>
    );
  }
  render() {
    let result = this.state.hasLoaded ?
      this.getResultTable() :
      <span className="MedalCount-loading">Loading</span>
    if (this.state.error) {
      result = (
        <div className="MedalCount-error">
          <h3>{this.state.error.title}</h3>
          <p>{this.state.error.description}</p>
        </div>
      );
    }
    return (
      <div className="MedalCount" id={this.props.element_id}>
        <h2 className="MedalCount-title">Medal Count</h2>
        {result}
      </div>
    );
  }
}

export default MedalCount;
