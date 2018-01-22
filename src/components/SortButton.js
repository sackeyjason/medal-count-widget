import React, { Component } from 'react';

class SortButton extends Component {
  handleKeyPress(event) {
    if(event.key == 'Enter'){
      this.props.clickHandler(event);
    }
  }
  render() {
    return (
      <td
        onClick={this.props.clickHandler}
        onKeyPress={this.handleKeyPress.bind(this)}
        tabIndex="0"
        className={"SortButton sort-" + this.props.order}
        data-id={this.props.order}>
        <span className="unseen">{this.props.order}</span>
      </td>
    );
  }
}

export default SortButton;
