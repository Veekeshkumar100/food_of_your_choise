import { useState } from "react"
import { assets } from "../../assets/assets"
import "./Nabvar.css"

export const Navbar=()=>{
    const [menu,setmenu]=useState("home");


    return(
        <div className='navbar'>
            <img   className="logo" src={assets.logo} alt="Logo" />
            <ul className="navbar-links">
                  <li  onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</li>
                  <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</li>
                  <li  onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
                  <li  onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-cart">
                    <img src={assets.basket_icon} alt="cart icon" />
                    <div className="dot"></div>
                </div>
                <button className="btn-sign-in">sign in</button>
            </div>
            
        </div>
    )
}