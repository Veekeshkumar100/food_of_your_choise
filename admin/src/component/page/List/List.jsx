import React, { useEffect, useState } from "react";
import "./List.css";
import { toast } from "react-toastify";
import { fetchData } from "../../../api/api";
import axios from "axios";
const List = () => {
  const url = "http://localhost:5000";
  const [list, setList] = useState([]);
  const fetchDat = async () => {
    const res = await fetchData();
    console.log(res);
    if (res.data.success) {
      setList(res.data.data);
    } else {
      toast.error("error");
    }
  };

  const removeData=async(id)=>{

   const res= await axios.post(`http://localhost:5000/api/food/delete`,{id});
     await fetchDat()

     if(res.data.success){
      toast.success(res.data.message);
     }else{
      toast.error("error")
     }
     
  }

  useEffect(() => {
    fetchDat();
  }, []);

  return (
    <div className="productList">
      <h3>ALL Food List</h3>
      <div className="food-list-table">
        <div className="product-itemName grid">
          <b>image</b>
          <b>name</b>
          <b>price</b>
          <b>description</b>
          <b>category</b>
          <b>remove</b>
        </div>
        <div className="productListgrid ">
          {list?.map((curElem, index) => {
            return (
              <div key={index} className="list-table-format grid">
                <img src={`${url}/image/` + curElem.image} alt="" />
                <p>{curElem.name}</p>
                <p>{curElem.price}</p>
                <p>{curElem.description}</p>
                <p>{curElem.category}</p>
                <p onClick={()=>removeData(curElem._id)}>-</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
