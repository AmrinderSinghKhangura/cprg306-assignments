"use client";
import React, { useEffect } from "react";
import Item from "./item";
import items from "./items.json";
import { useState } from "react";

function sortItems(list, sortBy) {
  return [...list].sort((a, b) => {
    if (a[sortBy] && b[sortBy]) {
      return a[sortBy].localeCompare(b[sortBy]);
    } else {
      return 0;
    }
  });
}

function itemList() {
  const [sortBy, setSortBy] = useState("name");
  const [list, setList] = useState(sortItems(items, sortBy));
  useEffect(() => {
    console.log(sortBy);
    let sorted = list;
    if (sortBy === "name") {
      sorted = sortItems(list, "name");
      setList(sorted);
    } else if (sortBy === "category") {
      sorted = sortItems(list, "category");
      setList(sorted);
    }
  }, [sortBy]);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between px-5">
        <button
          onClick={() => setSortBy("name")}
          className={`border-4 border-red-600 p-5 rounded-3xl ${
            sortBy === "name" && "bg-blue-900"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`border-4 border-red-600 p-5 rounded-3xl ${
            sortBy === "category" && "bg-blue-900"
          }`}
        >
          Category
        </button>
      </div>
      <div id="list">
        {list.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default itemList;