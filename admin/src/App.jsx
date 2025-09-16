import { Route, Routes } from "react-router-dom"
import Navbar from "./component/navbar/navbar"
import Sidebar from "./component/sidebar/Sidebar"
import Add from "./component/page/Add/Add"
import List from "./component/page/List/List"
import Order from "./component/page/Order/Order"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer/>
     <Navbar/>
     <hr />
     <div className="app-container">
   <Sidebar/>
   <div className="app-page">
    <Routes>
      <Route path="/add" element={<Add/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/order" element={<Order/>} />
    </Routes>
   </div>
     </div>
    </>
  )
}

export default App
