import React from "react";
import useInputHook from "../hooks/useInputHook";

function UserForm() {
const [firstName, bindFirstName, resetFirstName] = useInputHook('');
const [lastName, bindLastName, resetLastName] = useInputHook('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="FirstName">First Name</label>
        <input
          type="text"
          {...bindFirstName}
        />
        <label htmlFor="LastName">Last Name</label>
        <input
          type="text"
          {...bindLastName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
