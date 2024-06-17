"use client";
import TopBar from "../globalComponents/topBar";
import NewItem from "./new-item";
import ItemList from "./item-list";
import items from "./items.json";
import { useState } from "react";

export default function Page() {
  const [itemList, setItemList] = useState(items);

  return (
    <main>
      <TopBar />
      <h1 className="text-5xl text-white p-3 font-extrabold flex justify-center">
        Add an item
      </h1>
      <NewItem onAddItem={(newItem) => setItemList([...itemList, newItem])} />
      <h1 className="text-5xl text-white p-3 font-extrabold">Shopping List</h1>
      <ItemList list={itemList} />
    </main>
  );
}
