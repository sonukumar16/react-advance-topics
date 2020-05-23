/* 1. A class component that implements either one or both of the lifecycle
        methods getDerivedStateFromError or componentDidCatch becomes an error boundary.
   2. This static method getDerivedStateFromError is used to render a fallback UI after an error
        is thrown and the componentDidCatch method is used to log the error information.
    3. Error boundary catch errors during rendering in lifecycle methods and in the constructors
        of whole tree below them. however they do not capture errors in side event handlers like
         onclickHandler so for them we have to use try-catch       
*/

import React, { Component } from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

export default class index extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary>
      </div>
    );
  }
}
