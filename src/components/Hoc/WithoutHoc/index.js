import React, { Component } from 'react';
import HoverCounter from "./HoverCounter";
import   ClickCounter from "./ClickCounter";

export class withoutHoc extends Component {
    render() {
        return (
            <div>
                <ClickCounter />
                <HoverCounter />
            </div>
        )
    }
}

export default withoutHoc
