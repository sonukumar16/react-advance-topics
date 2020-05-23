import React, { Component } from "react";
import { UserConsumer } from "./userContextType";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
          /* This is only for default context
          ({ userName }) => {
                return <div> Hello {userName} </div>;
             } 
           */
          userName => <div>Hello {userName}</div>
        }
      </UserConsumer>
    );
  }
}

export default ComponentF;
