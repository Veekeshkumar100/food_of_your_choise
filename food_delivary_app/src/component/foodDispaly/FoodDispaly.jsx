import React, { useContext, useState } from 'react'
import "./FoodDispaly.css"
import { StoreContext } from '../context/storecontext'
import { FoodDisplayItem } from '../foodDisplayItem/foodDisplayItem';

const FoodDispaly = () => {
   const {food_list}=useContext(StoreContext);

  return (
    <div className='food-display' id="food-dispaly">
        <h2>Top dishes for your chois</h2>
           
        <div className='food-display-list'>
            {
                food_list.map((item,indext)=>{
                 
                   return(

                    <FoodDisplayItem   key={indext} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}  />
                   )
                })
            }
        </div>
    </div>
  )
}

export default FoodDispaly
