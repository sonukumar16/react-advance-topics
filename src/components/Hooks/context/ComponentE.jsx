import React, { useContext } from "react";

import { UserContext, ChannelContext } from "./index";
import ComponentF from "./ComponentF";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div style={{ textAlign: "center" }}>
      Component E using useContext :-
      <p>
        User context {user} - Channel context {channel}
      </p>
      <hr />
      <ComponentF />
    </div>
  );
}

export default ComponentE;
