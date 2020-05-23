import React, { Component } from "react";

class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(" ComponentB - Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ComponentB - getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentB - componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ComponentB - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("ComponentB - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ComponentB - componentDidUpdate");
  }
  changeState = () => {
    this.setState({ name: "Sonu" });
  };

  render() {
    console.log("ComponentB - render");
    return <div> Component B </div>;
  }
}

export default ComponentB;
