import React, { useState, useEffect } from 'react';

function BackgroundImage({ src }) {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setBackgroundLoaded(true);
    };
  }, [src]);


  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        background: backgroundLoaded ? `url(${src}) no-repeat center/cover` : 'red',
        transition: 'all 0.5s ease-out',
        opacity: backgroundLoaded ? 1 : 0,
        position: 'fixed',
        height: '100vh',
        width: '100%'
      }}
    >
      {!backgroundLoaded && <div>Loading...</div>}
    </div>
  );
}

export default BackgroundImage;