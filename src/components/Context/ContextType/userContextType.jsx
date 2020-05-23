import React from "react";

const UserContext = React.createContext({ userName: "sonu" }); // default context

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
export default UserContext;
