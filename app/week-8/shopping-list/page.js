"use client";
import TopBar from "../../globalComponents/topBar";
import NewItem from "./new-item";
import ItemList from "./item-list";
import items from "./items.json";
import MealIdeas from "./meal-ideas";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function Page() {
  const [itemList, setItemList] = useState(items);
  const [ingredient, setIngredient] = useState("null");
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/week-8/");
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="text-center mt-32 text-2xl animate-pulse ">
        Authenticating
      </div>
    );
  }

  return (
    <main>
      <TopBar />
      <button
        className="bg-gray-500 hover:bg-slate-800"
        onClick={firebaseSignOut}
      >
        Sign Out
      </button>
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
