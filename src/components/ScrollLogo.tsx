
import React from 'react';

const ScrollLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-[52px] h-[52px] bg-scroll-logo-gradient rounded-xl relative scroll-logo-particles ${className}`}>
      <div className="scroll-logo-line" />
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
    </div>
  );
};

export default ScrollLogo;
