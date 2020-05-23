import React, { Component } from 'react'

export class HoverCounter extends Component {
    render() {
        const {incrementCount, count} = this.props;
        return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>;
    }
}
export default HoverCounter;
