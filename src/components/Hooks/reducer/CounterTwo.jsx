import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};

const reducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - value };
    case "reset":
      return initialState;
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - value };
    default:
      return state;
  }
};

/* using object format of both type and value to manage the state 
which is more suitable to handle with non-primitive data type  */

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ textAlign: "center" }}>
      <div>First Counter = {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <div>Second Counter = {count.secondCounter}</div>
        <div>
          <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterTwo;
