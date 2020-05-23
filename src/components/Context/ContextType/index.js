/* With the help of default context, we can access value of default context,
Steps:- 
  1. Create context with default value;
  2. Don't use provider
  3. Only direct use consumer in your component

  Disadvantage:-
  1. only one context will used with one parameter.
*/
import React, { Component } from "react";
import ComponentC from "./ComponentC";

export class ContextType extends Component {
  render() {
    return (
      <div>
          <ComponentC />
      </div>
    );
  }
}

export default ContextType;
