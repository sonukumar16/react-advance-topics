import React, { useEffect, useState, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);

  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(buttonRef.current);
    };
  }, []);

  return (
    <div>
      Timer is - {timer}
      <button onClick={() => clearInterval(buttonRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default HookTimer;
