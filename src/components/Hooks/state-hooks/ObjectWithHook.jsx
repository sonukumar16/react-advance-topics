import React, { useState } from "react";

function ObjectWithHook() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />
      <h4>First Name:- {name.firstName}</h4>
      <h4>Last Name:- {name.lastName}</h4>
      <h3>FULL NAME:- {JSON.stringify(name)}</h3>
    </div>
  );
}

export default ObjectWithHook;
