import React, { Component } from 'react';

class SortButton extends Component {
  render() {
    return (
      <td
        onClick={this.props.clickHandler}
        className={"SortButton sort-" + this.props.order}
        data-id={this.props.order}>
        <span className="unseen">{this.props.order}</span>
      </td>
    );
  }
}

export default SortButton;
