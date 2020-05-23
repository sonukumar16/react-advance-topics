import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { UserProvider } from "./userContextType";

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Mike">
          <ComponentE />
        </UserProvider>
      </div>
    );
  }
}

export default ComponentC;
