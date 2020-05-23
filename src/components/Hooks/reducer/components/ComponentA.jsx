import React, { useContext } from "react";

import { CountContext } from ".";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>Component A count = {countContext.count} </div>
      <button onClick={() => countContext.dispatch("increment")}>Increment</button>
      <button onClick={() => countContext.dispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;
