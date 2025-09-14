import React, { useContext } from 'react'
import { StoreContext } from '../../context/storecontext'

import  "./placeOrder.css"

const PlaceOrder = () => {
  const {getCardTotalPrice}=useContext(StoreContext);

  return (
    <div className='place-order'>
      <div className='place-order-left'>
        <p>Delivery Address</p>
         <div className='multi-filed'>
          <input type='text' placeholder='Enter your first Name'/>
          <input type='text' placeholder='Enter your last Name'/>
          </div>
            <input type='email' placeholder='Enter your email address'/>
          <input type='text' placeholder='Enter your street'/> 
            <div className='multi-filed'>
          <input type='text' placeholder='city'/>
          <input type='text' placeholder='state'/>
           </div>
             <div className='multi-filed'>
          <input type='text' placeholder='zip code'/>
          <input type='text' placeholder='country'/>
           </div>
           <input type="tel" placeholder='phone'/>
      </div> 


      <div className='place-order-right'>
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
    <button>PROCEED TO CHECKOUT</button>
  </div>
        </div> 
    </div>
  )
}

export default PlaceOrder
