import React, { Component } from "react";

export class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  clickHandler = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          {" "}
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
