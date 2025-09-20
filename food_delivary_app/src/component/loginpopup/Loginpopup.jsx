
import { useContext, useEffect, useState } from "react";
import "./Loginpopup.css"; 
import { assets } from "../../assets/assets";
import axios from "axios";
import { StoreContext } from "../context/storecontext";

const Loginpopup = ({setShowlogin}) => {
   const url="http://localhost:5000/api/users";

   const {setToken}=useContext(StoreContext);

    const [currState,setCurrState]=useState("Sign-up");
    console.log(currState);
   const [data,setdata]=useState({
    name:"",
    email:"",
    password:""
   })


   const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setdata(data=>({...data,[name]:value}))
   }
     useEffect(()=>{
    console.log(data);
     },[data]);

     const handleSubmit=async(e)=>{
       e.preventDefault();
       if(currState==="Sign-up"){

        const res= await axios.post(`${url}/register`,data);
        console.log(res);
        setCurrState("login");
       }else{
          const res= await axios.post(`${url}/login`,data);
          console.log(res);
          localStorage.setItem("token",res.data.data.accessToken);
          setToken(res.data.data.accessToken);
          
          setShowlogin(false);
       }
     }



  return (
    <div className="login-popup">
     <div className="loginpop-container">
        <div className="login-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowlogin(false)} src={assets.cross_icon}  />
        </div>
        
          <form onSubmit={handleSubmit} className="loginpo-input">
          {currState==="Sign-up"? <input  onChange={handleInputChange} type="text" name="name"  placeholder="Enter Name" required/>:""}
            <input  onChange={handleInputChange} type="email" name="email" placeholder="Enter email" required/>
            <input  onChange={handleInputChange} type="password" name="password" placeholder="Enter password" required/>
            <button type="submit">{currState==="Sign-up" ? "create account":"login"}</button>
            </form>
       
    
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
