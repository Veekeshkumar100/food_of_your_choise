import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
   const [countItem,setCountItem]=useState({});

   const addtocart=(itemId)=>{
         if(!countItem[itemId]){
          setCountItem((prev)=> ({...prev,[itemId]:1}));
         }else{
          setCountItem((prev)=> ({...prev,[itemId]:prev[itemId] +1}));
         }
   }
   const removeItem=(itemId)=>{
          setCountItem((prev)=> ({...prev,[itemId]:prev[itemId] - 1}));
           }

   const getCardTotalPrice=()=>{
            let totalAmmount=0;
        for(const item in countItem){
        const ItemInfo=food_list.filter((Elem)=>Elem._id===item);
        console.log(ItemInfo);
             totalAmmount+=ItemInfo[0].price * countItem[item];
        }
        return totalAmmount;
    }

useEffect(()=>{
console.log(countItem);
},[countItem])

  const contextValue = {
    food_list,
    addtocart,
    removeItem,
    countItem,
    getCardTotalPrice,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
