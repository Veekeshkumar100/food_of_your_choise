import { useState } from "react"
import { assets } from "../../assets/assets"
import "./Nabvar.css"
import {Link} from "react-router-dom";

export const Navbar=({setShowlogin})=>{
    const [menu,setmenu]=useState("home");


    return(
        <div className='navbar'>
            <img   className="logo" src={assets.logo} alt="Logo" />
            <ul className="navbar-links">
                  <Link  to="/" onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
                  <a href="#explore-menu" onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                  <a  href="#app-download" onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
                  <a href="#footer"  onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-cart">
                    <img src={assets.basket_icon} alt="cart icon" />
                    <div className="dot"></div>
                </div>
                <button className="btn-sign-in" onClick={()=>setShowlogin(true)}>sign in</button>
            </div>
            
        </div>
    )
}