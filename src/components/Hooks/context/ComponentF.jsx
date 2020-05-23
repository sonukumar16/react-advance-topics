import React from "react";

import { UserContext, ChannelContext } from "./index";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {user => (
          <ChannelContext.Consumer>
            {channel => (
              <div>
                Component F by using context consumer :-
                <p>
                  user context {user} - channel context {channel}
                </p>
              </div>
            )}
          </ChannelContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
