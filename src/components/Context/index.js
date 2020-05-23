/* Context provides a way to pass data through the component tree
    without having to pass props down manually at every level.
    
    step to use context:- 
    1. Create the context
    2. Provide a context value
    3. Consume the context value 
*/
import React, { Component } from "react";
import ComponentC from "./ComponentC";
import { UserProvider } from "./userContext";

export class Context extends Component {
  render() {
    return (
      <div>
        <UserProvider value="SONU">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default Context;
