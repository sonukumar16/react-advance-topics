import React, { useEffect, useState } from "react";

function MouseEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = event => {
    console.log("mouse event");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log(" log mouse ", x, y);
    window.addEventListener("mousemove", logMousePosition);

    /* after removed the component, we need to remove all subscription and listener 
    otherwise all event listener and subscription still will be running and creating 
    memory leaking problem
     */
    return ()=> {
      console.log("Component unmounting code!")
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, []); /* here blank array tells react, hey this effect doesn't depend on any value
  so don't re-render every time, render just run only once*/

  return (
    <div>
      Hooks -> X - {x} Y - {y}
    </div>
  );
}

export default MouseEffect;
