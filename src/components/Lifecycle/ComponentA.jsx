import React, { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sonu"
    };
    console.log(" ComponentA - Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" ComponentA - getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA - componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ComponentA - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("ComponentA - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ComponentA - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentA - componentWillUnmount");
  }
  changeState = () => {
    this.setState({ name: "Mike" });
  };

  render() {
    console.log("ComponentA - render ");
    return (
      <div >
        Component A
        <button className='button_componentA' onClick={this.changeState}>Change state</button>
        <ComponentB />
      </div>
    );
  }
}

export default ComponentA;
