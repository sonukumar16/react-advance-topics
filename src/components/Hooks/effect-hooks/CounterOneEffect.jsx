import React, { useEffect, useState } from "react";

function CounterOneEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // It'll be running after every single render.
  /*  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); */

  /*   To prevent every time re-render pass dependent values in array 
      as an second parameters to useEffects */
  useEffect(() => {
    console.log("updating every times");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}> Click {count} </button>
    </div>
  );
}

export default CounterOneEffect;
