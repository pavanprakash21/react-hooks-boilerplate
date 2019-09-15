import React, { Component } from "react";

// TODO:
// 1. Update the page title as the input is received
export class ClassDocTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Look ma! I can change the title"
    };
  }

  // Code here

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ClassDocTitle;
