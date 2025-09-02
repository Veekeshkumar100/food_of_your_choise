import React from 'react'
import { assets } from '../../assets/assets'
import "./app-download.css"
const AppDownload = () => {
  return (
    <div className='download-icon'>
   
            <p>For better experience Download <br/>  Tomato app</p>
            <div className='download-icons-img'>
            <img src={assets.play_store} alt="play store icon" />
            <img src={assets.app_store} alt="play store icon" />
            </div>
     
      
    </div>
  )
}

export default AppDownload
