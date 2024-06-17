"use client";
import { useState } from "react";

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(
      "Name: " + name + "\nQuantity: " + quantity + "\nCategory: " + category
    );
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        placeholder="Name"
        className="font-bold text-lg bg-gray-200 p-2 text-black m-5 w-1/2 self-center"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="font-bold text-lg bg-gray-200 p-2 text-black m-5 w-1/2 self-center"
        placeholder="Quantity"
        required
        value={quantity}
        min={1}
        max={99}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <select onChange={setCategory} className="w-1/2 self-center text-black">
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen_foods">Frozen Foods</option>
        <option value="canned_goods">Canned Goods</option>
        <option value="dry_goods">Dry Goods</option>
        <option value="beverages">beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
      <button
        className="bg-gray-200 text-black w-1/4 self-center m-10 rounded-xl"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default NewItem;
