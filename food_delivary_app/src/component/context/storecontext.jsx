import { createContext, useEffect, useState } from "react";

import axios from "axios";


export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
   const [countItem,setCountItem]=useState({});
   const [token,setToken]=useState("");
   const [food_list,setFood_list]=useState([]);


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

 const fetchData=async()=>{
    const res=await axios.get("http://localhost:5000/api/food/list"); 
     setFood_list(res.data.data);   
 
 }


useEffect(()=>{
   if(  localStorage.getItem("token")){
     setToken(localStorage.getItem("token"))
   }

   fetchData();
},[])

  const contextValue = {
    food_list,
    addtocart,
    removeItem,
    countItem,
    getCardTotalPrice,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
