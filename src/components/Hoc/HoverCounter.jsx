import React, { Component } from "react";
import withCounter from "./withCounter";

export class HoverCounter extends Component {
  render() {
    const { incrementCount, count } = this.props;
    return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>;
  }
}

export default withCounter(HoverCounter, 10);
