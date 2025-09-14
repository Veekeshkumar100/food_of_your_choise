import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import "./Nabvar.css"
import {Link} from "react-router-dom";
import { StoreContext } from "../context/storecontext";


export const Navbar=({setShowlogin})=>{
    const [menu,setmenu]=useState("home");
    const {getCardTotalPrice}=useContext(StoreContext);

    return(
        <div className='navbar'>
           <Link to="/">   <img   className="logo" src={assets.logo} alt="Logo" /></Link>
            <ul className="navbar-links">
                  <Link  to="/"  onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
                  <a href="#explore-menu" onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                  <a  href="#app-download" onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
                  <a href="#footer"  onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-cart" >
                  <Link to="/cart">  <img  src={assets.basket_icon} alt="cart icon" /></Link>
                   <div className={getCardTotalPrice()===0?"":"dot"}></div>
                </div>
                <button className="btn-sign-in" onClick={()=>setShowlogin(true)}>sign in</button>
            </div>
            
        </div>
    )
}