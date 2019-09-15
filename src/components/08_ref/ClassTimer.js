import React, { Component } from "react";

// TODO:
// 1. Show a continuos tick
// 2. Don't forget to cleanup
export class ClassTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    };
  }

  render() {
    return (
      <>
        <h2>Class Timer - {this.state.timer}</h2>
        <button
          type="button"
          onClick={/* code here */}
        >
          Stop Running
        </button>
      </>
    );
  }
}

export default ClassTimer;
