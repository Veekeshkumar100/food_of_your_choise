

import { Navbar } from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/home/Home';
// import Cart from './component/pages/Cart/Cart';
import Footer from './component/footer/Footer';
import { useState } from 'react';
import Loginpopup from './component/loginpopup/Loginpopup.jsx';
import Cart from './component/pages/Cart/Cart.jsx';
import PlaceOrder from './component/pages/placeOrder/placeOrder.jsx';

function App() {
    const [showlogin,setShowlogin]=useState(false);
    
  return (
    <>
     {showlogin ? <Loginpopup setShowlogin={setShowlogin}/> :<></>}

    <div className='App'>
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
           <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
    </div>
    </>
    
  )
}

export default App;




