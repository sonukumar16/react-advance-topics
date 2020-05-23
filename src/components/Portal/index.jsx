/* React portals  provides a way to render children into a dom node that exists  
    outside the dom hierarchy of the parent component
    eg. insert any component at any where irrespective of parent component( Dom/react tree)
    -->> portal also can behave as like normal react child
*/

import React from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <h1> Portal Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default Portal;
