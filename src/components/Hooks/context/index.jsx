import React from "react";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function index() {
  return (
    <div>
      <UserContext.Provider value={"Sonu"}>
        <ChannelContext.Provider value={"Blockchain"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default index;
