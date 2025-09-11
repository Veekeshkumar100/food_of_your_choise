
import { useState } from "react";
import "./Loginpopup.css"; 
import { assets } from "../../assets/assets";

const Loginpopup = ({setShowlogin}) => {
    const {currState,setCurrState}=useState("sign-up")
    console.log(currState);


  return (
    <div className="login-popup">
     <div className="loginpop-container">
        <div className="login-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowlogin(false)} src={assets.cross_icon}  />
        </div>
        <div className="loginpo-input">
            <input type="text" placeholder="Enter Name" required/>
            <input type="email" placeholder="Enter email" required/>
            <input type="password" placeholder="Enter password" required/>
             </div>
            <button>{currState==="sign up" ? "create account":"login"}</button>
     </div>

    </div>
  )
}

export default Loginpopup;
