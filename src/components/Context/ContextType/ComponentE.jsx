/* using contextType to access the context value from provider
 but it has some disadvantage like only one context can be used and also with one value and
 only used with class component
*/

import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContextType";

export class ComponentE extends Component {
  static contextType = UserContext; // M-2
  render() {
    return (
      <div>
        {/* Here context value is coming from Provider */}
        Component E {this.context}
        <ComponentF />
      </div>
    );
  }
}
/* M-1
ComponentE.contextType = UserContext;
 */
export default ComponentE;
