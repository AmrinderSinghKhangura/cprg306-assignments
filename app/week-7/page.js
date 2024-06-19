"use client";
import TopBar from "../globalComponents/topBar";
import NewItem from "./new-item";
import ItemList from "./item-list";
import items from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  const [itemList, setItemList] = useState(items);
  const [ingredient, setIngredient] = useState("null");

  return (
    <main>
      <TopBar />
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
          <h1 className="text-5xl text-white p-3 font-extrabold flex justify-center">
            Add an item
          </h1>
          <NewItem
            onAddItem={(newItem) => setItemList([...itemList, newItem])}
          />
          <h1 className="text-5xl text-white p-3 font-extrabold">
            Shopping List
          </h1>
          <ItemList list={itemList} onItemSelect={setIngredient} />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <h1 className="text-5xl text-white p-3 font-extrabold">Meal Ideas</h1>
          <MealIdeas ingredient={ingredient} />
        </div>
      </div>
    </main>
  );
}
