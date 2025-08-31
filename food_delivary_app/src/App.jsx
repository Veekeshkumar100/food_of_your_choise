import React from 'react'

import { Navbar } from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/home/Home';
import Cart from './component/pages/Cart/Cart';

function App() {
    
    
  return (
    <div className='App'>
      <Navbar />

      <Routes>
           <Route path="/" element={<Home/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App;




