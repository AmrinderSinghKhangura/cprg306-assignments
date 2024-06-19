"use client";

import React, { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(ingredient);
      console.log(data.meals);
      return data.meals;
    } else {
      throw new Error("HTTP Error! status: ${response.status}");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData);
    };
    loadMeals();
  }, [ingredient]);

  return (
    <div>
      <ul>
        {meals &&
          meals.map((meal) => {
            return (
              <li key={meal.idMeal}>
                <image
                  className="w-20 h-20"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                {meal.strMeal}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
