import React, { Component } from 'react'

export class HoverCounter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0
        };
      }
    
      onMouseHandler = () =>  {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    };
        
    render() {
        return (
            <div>
                <h2 onMouseOver={this.onMouseHandler}>Hovered {this.state.count} times</h2>
            </div>
        )
    }
}

export default HoverCounter
