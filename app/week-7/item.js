import React from "react";

function cleanName(name) {
  // Remove emojis
  const nameWithoutEmojis = name.replace(
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}-\u{2B55}\u{1F004}-\u{1F0CF}\u{1F170}-\u{1F251}\u{1F260}-\u{1F265}]/gu,
    ""
  );
  return nameWithoutEmojis.split(",")[0].trim();
}

function item({ name, quantity, category, onSelect }) {
  const clean = cleanName(name);
  return (
    <ul
      onClick={() => onSelect(clean)}
      className="border-4  border-green-400 m-3 p-3 rounded-xl "
    >
      <li>{name}</li>
      <li>
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}

export default item;
