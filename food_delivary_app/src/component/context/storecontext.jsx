import { createContext, useState } from "react";
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



  const contextValue = {
    food_list,
    addtocart,
    removeItem,
    countItem,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
