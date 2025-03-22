
import React from 'react';

const ScrollLogo = ({ className = "" }) => {
  return (
    <div className={`w-[52px] h-[52px] relative ${className}`}>
      <img 
        src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/scroll-jhb7n2/assets/bmirn3kbu97g/BlueLogo.png" 
        alt="Scroll Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ScrollLogo;
