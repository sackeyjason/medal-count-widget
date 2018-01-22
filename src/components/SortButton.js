import React, { Component } from "react";

const medalColors = {
  gold: "#fad032",
  silver: "#9aa5ad",
  bronze: "#875025"
};

class SortButton extends Component {
  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.props.clickHandler(event);
    }
  }
  render() {
    let dot;
    if (this.props.order !== "total") {
      dot = (
        <div
          className="dot"
          style={{
            backgroundColor: medalColors[this.props.order]
          }}
        />
      );
    }
    let activeClass = "";
    if (this.props.active) {
      activeClass = " is-active";
    }

    return (
      <th
        onClick={this.props.clickHandler}
        onKeyPress={this.handleKeyPress.bind(this)}
        tabIndex="0"
        className={"SortButton sort-" + this.props.order + activeClass}
        data-id={this.props.order}
      >
        <span className={this.props.order !== "total" ? "hidden" : ""}>
          {this.props.order}
        </span>
        {dot}
      </th>
    );
  }
}

export default SortButton;
