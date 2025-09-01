import "./foodDisplayItem.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/storecontext";

export const FoodDisplayItem = ({
  id,
  name,
  image,
  price,
  description,
  category,
}) => {
  const { addtocart, removeItem, countItem } = useContext(StoreContext);

  return (
    <div className="foodItem">
      <div className="display-food-item-image">
        <img src={image} alt="image" />
        <div className="add-to-cart">
          {!countItem[id] ? 
            <img
              onClick={()=>addtocart(id)}
              src={assets.add_icon_green}
              alt="add"
            />
           : 
            <div className="addtocart">
              <img
                onClick={()=>addtocart(id)}
                src={assets.add_icon_white}
                alt="add"
              />
              <p>{countItem[id]}</p>
              <img
                onClick={()=>removeItem(id)}
                src={assets.remove_icon_red}
                alt="add"
              />
            </div>
          }
        </div>
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="ams " />
        </div>
        <p className="food-description">{description}</p>
        <p className="food-price">${price}</p>
      </div>
    </div>
  );
};
