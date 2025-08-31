import React, { useState } from 'react'
import "./Home.css";
import Headder from '../../Header/Headder';
import ExploreMenu from '../../exploreMenu.jsx/ExploreMenu.css/ExploreMenu';
import FoodDispaly from '../../foodDispaly/FoodDispaly';

const Home = () => {
 const [category,setCotegary]=useState("All");

  return (
    <div>
      <Headder/>
      <ExploreMenu  category={category}  setCotegary={setCotegary}/>
    <FoodDispaly/>
    </div>
  )
}

export default Home
