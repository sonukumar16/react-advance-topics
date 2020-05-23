import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";

export class index extends Component {
  render() {
    return (
      <div>
        <Counter
          render={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        />
      </div>
    );
  }
}

export default index;
