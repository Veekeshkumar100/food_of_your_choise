import React from 'react'
import { assets } from '../../assets/assets'

export const FoodDisplayItem = ({id,name,image,price,description,category}) => {
  return (
    <div className='foodItem'>
        <div className='display-food-item-image'>
            <img src={image} alt='image'/>
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="ams " />
            </div>
            <p className='food-description'>{description}</p>
            <p className='food-price'>${price}</p>
        </div>

      
    </div>
  )
}


