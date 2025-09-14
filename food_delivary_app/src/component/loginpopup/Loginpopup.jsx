
import { useState } from "react";
import "./Loginpopup.css"; 
import { assets } from "../../assets/assets";

const Loginpopup = ({setShowlogin}) => {
    const [currState,setCurrState]=useState("login");
    console.log(currState);


  return (
    <div className="login-popup">
     <div className="loginpop-container">
        <div className="login-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowlogin(false)} src={assets.cross_icon}  />
        </div>
        <div className="loginpo-input">
          {currState==="Sign-up"? <input type="text" placeholder="Enter Name" required/>:""}
            <input type="email" placeholder="Enter email" required/>
            <input type="password" placeholder="Enter password" required/>
            <button>{currState==="Sign-up" ? "create account":"login"}</button>
        </div>
    
     <div className="loginpop-condition">
      <input type="checkbox" required/>
        <p>By continuing, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
     </div>
        <p className="loginpop-footer">Don't have an account? <span onClick={()=>setCurrState(currState==="Sign-up"?"login":"Sign-up")}>{currState==="Sign-up"?"Login":"Sign-up"}</span></p>
 </div>
    </div>
  )
}

export default Loginpopup;
