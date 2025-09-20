import React, { useContext, useState } from "react";
import "./FoodDispaly.css";
import { StoreContext } from "../context/storecontext";
import { FoodDisplayItem } from "../foodDisplayItem/foodDisplayItem";

const FoodDispaly = ({ category }) => {
  const { food_list } = useContext(StoreContext);

    console.log(food_list);
  return (
    <div className="food-display" id="food-dispaly">
      <h2>Top dishes for your chois</h2>

      <div className="food-display-list">
        {food_list.map((item, indext) => {
        {
            console.log(category, item.category);
          }
          if (category==="All"  || item.category === category) {
            return (
              <FoodDisplayItem
                key={indext}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDispaly;
