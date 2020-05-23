import React, { useState } from "react";

function ArrayWithHook() {
  const [items, setItems] = useState([]);
  const addItems = () =>
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      }
    ]);

  return (
    <div>
      <button onClick={addItems}>Add a number</button>
      <h2>Items are:- </h2>
      <ul>
        {items.map(item => (
          <li>
            {item.id} {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayWithHook;
