import React, { useState } from "react";
import MouseEffect from "./MouseEffect";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <MouseEffect />}
    </div>
  );
}

export default MouseContainer;
