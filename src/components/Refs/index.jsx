import React, { Component } from "react";

export default class Refs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // method-1  best way
    this.cbRef = null; // Method-2
    this.setCbRef = element => (this.cbRef = element);
  }

  componentDidMount() {
    // this.inputRef.current.focus(); for M-1;
    console.log(this.cbRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => alert(this.inputRef.current.value);

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
