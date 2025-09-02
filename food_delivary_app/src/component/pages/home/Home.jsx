import React, { useState } from 'react'
import "./Home.css";
import Headder from '../../Header/Headder';
import ExploreMenu from '../../exploreMenu.jsx/ExploreMenu.css/ExploreMenu';
import FoodDispaly from '../../foodDispaly/FoodDispaly';
import AppDownload from '../../app-download/AppDownload';

const Home = () => {
 const [category,setCotegary]=useState("All");

  return (
    <div>
      <Headder/>
      <ExploreMenu  category={category}  setCotegary={setCotegary}/>
    <FoodDispaly category={category}/>
     <AppDownload/>
    </div>
  )
}

export default Home
