import React, { Component } from 'react';
import HoverCounter from "./HoverCounter";
import ClickCounter from "./ClickCounter";

export class WithHoc extends Component {
    render() {        
        return (
            <div>
                <ClickCounter name='Sonu' />
                <HoverCounter />
            </div>
        )
    }
}

export default WithHoc;
