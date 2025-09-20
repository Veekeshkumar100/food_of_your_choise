import React, { useContext } from 'react'
import "./Cart.css";
import { StoreContext} from '../../context/storecontext';
import { assets } from '../../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   const {food_list,addtocart,removeItem,countItem,getCardTotalPrice}=useContext(StoreContext);
    console.log(food_list);

       const navigate=useNavigate();
       const handleNavigation=()=>{
         navigate("/order");
       }
  return (
    <>
    <div className='Cart'>
         <h2>My cart</h2>
        <div className='Cart-items'>
           <div className="cart-items-titles">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div>
<br />
<hr />
       {
        food_list.map((Item,index)=>{
            if(countItem[Item._id]>0){
            return( 
            <div>
            <div className='card-item-title card-item-items'>
                <img src={`http://localhost:5000/image/${Item.image}`} alt="image"/>
                <p>{Item.name}</p>
                <p>${Item.price}</p>
                <p>{countItem[Item._id]}</p>
                <p> ${countItem[Item._id] * Item.price}</p>
               <p onClick={()=>removeItem(Item._id)}>-</p>
            </div>
               <hr />
            </div>
            )    

          }  
})
}  
 </div>
 <div className="cart-bottom">
  <div className="cart-total">
    <h3>cartTolat</h3>
    <div className='cart-totals'>
      <p>subtotal</p>
      <p>${getCardTotalPrice()}</p>
    </div>
    <hr />

    <div className='cart-totals'>
       <p>Delivery fee</p>
      <p>${getCardTotalPrice()===0?0:3}</p>
    </div>
    <hr />
    <div className='cart-totals'>
       <h4>Total</h4>
      <p>${getCardTotalPrice()===0?0:getCardTotalPrice()+3}</p>
    </div>
    <button onClick={handleNavigation}> Process to Proceed </button>
  </div>
  <div className="cart-promocode">
    <p>if you have any promocode then, you can enter it here</p>
    <div className="promocode-input">
      <input type='text' placeholder='Enter your promocode here'/>
      <button>submit</button>
    </div>
  </div>
 </div>
  </div>
    </>
)
}

export default Cart
