import React from "react";
function item({ name, quantity, category }) {
  return (
    <ul className="border-4  border-green-400 m-3 p-3 rounded-xl ">
      <li>{name}</li>
      <li>
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}

export default item;
