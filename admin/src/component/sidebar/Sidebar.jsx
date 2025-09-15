import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-items">
            <NavLink to="/add" className="sidebar-item">
                <img src={assets.add_icon} alt="" />
                <p>Add Item</p>
            </NavLink>
            <NavLink to="/order" className="sidebar-item">
                <img src={assets.order_icon} alt="" />
                <p>Order Item</p>
            </NavLink>
            <NavLink to="/list" className="sidebar-item">
                <img src={assets.order_icon} alt="" />
                <p>List Item</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar;
