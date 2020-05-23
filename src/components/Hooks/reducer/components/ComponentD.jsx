import React, { useContext } from "react";
import { CountContext } from ".";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div style={{ display: "block" }}> Component D {countContext.count}</div>
      <button onClick={() => countContext.dispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentD;
