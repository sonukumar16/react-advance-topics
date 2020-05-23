import React from "react";

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
/* ref forwarding is technique for automatically
 passing a ref from a component to child components */
