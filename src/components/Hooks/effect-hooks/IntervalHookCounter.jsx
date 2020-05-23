import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const [someProps, setSomeProps] = useState("someProps")
  /* If You are passing blank array [] means you are telling 
    react to don't observe any changes, if passing inputValue as [] then count value always will be
    showing 0, so to track or observe the changes you have to pass your changing values as an input
    that' why  here passing count  
 */
  //M-1
  /* const tick = ()=> {
        setCount(count+1);
    }
    useEffect(() => {
        const timeInterval = setInterval(tick,1000);
        return () => {
            clearInterval(timeInterval);
        }
    }, [count]); */

  /* If you dont want to pass any input dependencies/value then use previous state method to update the state */

  //M-2
  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
      /* if you want to call functions inside useEffect then please defined them inside the useEffect method
       so that they can easy get the inputValues and observes the changes*/
    function doSomeThing() {
        console.log("someProps--->>", someProps);
    }
    doSomeThing();
    const timeInterval = setInterval(tick, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [someProps]);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
