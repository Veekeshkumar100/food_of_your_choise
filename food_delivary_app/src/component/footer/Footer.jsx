import React from 'react'
import "./Footer.css"
import { assets } from "../../assets/assets"

const Footer = () => {
  return (
  
      <div className='footer' id="footer">
      <div className='footer-content'>
         <div className='footer-content-left'>
             <img   className="logo" src={assets.logo} alt="Logo" />
             <p>Lorem ipsum , aspernatur maxime esse at quis quibusdam nulla dicta ullam possimus voluptatem unde vitae a quod rerum odit voluptatibus facilis aperiam.</p>
             <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
         </div>
         <div className='bottom-footer'>
<div className='footer-content-center'>
            <h2>CONTACT</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>privasy and policy</li>
             
            </ul>

         </div>
         <div className='footer-content-right'>
           <h2>GET IN TOUCH</h2>
           <ul>
          <li>+91-732-121-203</li>
          <li>vekesh487@gmail.com</li> 
           </ul>
         </div>
         </div>
      </div>
       <hr />

      <p>copyright 2024 &copy; Tomato.com -All the right reserved </p>
      </div> 
     
  )
}

export default Footer
