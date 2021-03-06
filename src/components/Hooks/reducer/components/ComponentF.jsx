import React, { useContext } from "react";
import { CountContext } from ".";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div style={{ display: "block" }}> Component F {countContext.count} </div>
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

export default ComponentF;
