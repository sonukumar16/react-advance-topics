import React, { useMemo, useState } from "react";

/* UseMemo is a hook to optimized the performance of a component during re-rendering.
it maintains cache value of a function even re-rendering of component
*/

/* Diff bw useCallback and useMemo
- useCallback caches the provided function's instance itself where as 
useMemo invokes the provided function and cache the returned result
*/

function MemoHook() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };
  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Increment one- {countOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Increment Two- {countTwo}</button>
      </div>
    </div>
  );
}

export default MemoHook;
