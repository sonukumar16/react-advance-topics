import React, { useState } from "react";

function CounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(()=>{
        setCount(prevCount => prevCount + 1);

      },2000)
    }
  };
  
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button
        onClick={() =>
          setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
        }
      >
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default CounterTwo;
