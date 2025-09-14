import { assets } from "../../assets/assets";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-items">
            <div className="sidebar-item">
                <img src={assets.add_icon} alt="" />
                <p>Add Item</p>
            </div>
            <div className="sidebar-item">
                <img src={assets.order_icon} alt="" />
                <p>Order Item</p>
            </div>
            <div className="sidebar-item">
                <img src={assets.order_icon} alt="" />
                <p>Order Item</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar;
