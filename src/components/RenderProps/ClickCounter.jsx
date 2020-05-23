import React, { Component } from 'react'

export class ClickCounter extends Component {
    render() {
      const { incrementCount, count, name  } = this.props;
      return (
          <div>
            <button onClick={incrementCount}> {name} Clicked {count} times</button>
          </div>
        )
    }
}

export default ClickCounter;
