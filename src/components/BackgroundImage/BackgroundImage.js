import React, { useState } from 'react';
import './BackgroundImage.scss'

function BackgroundImage({ src }) {
  const [loading, setLoading] = useState(true);
    return (
    <div style={
        {          
          width: "100%",
          position: 'fixed',
          height: '100vh',
        }
    } >
    <img 
      src={src} 
      style={
          {
            display: loading?"none":"block",
            width:"100%",
            height: "100%",
            animation: "fadeIn 0.5s",
        }
      } 
      onLoad={(e)=>{setLoading(false)}} 
      alt="background" />
    {loading &&
      <div className="loader-container">
        <div className='loader'></div>
      </div>
    }
</div>)}

export default BackgroundImage;