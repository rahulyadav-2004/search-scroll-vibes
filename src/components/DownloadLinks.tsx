
import React from 'react';

const DownloadLinks: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
      <div className="text-white text-base mb-4">Get the app</div>
      <div className="flex gap-4">
        <a href="#" className="transition-transform hover:scale-105">
          <img 
            src="/lovable-uploads/306c4901-434e-4a08-9a43-88dc0247983f.png" 
            alt="App Store" 
            className="w-[125px] h-[36px]"
          />
        </a>
        <a href="#" className="transition-transform hover:scale-105">
          <img 
            src="/lovable-uploads/306c4901-434e-4a08-9a43-88dc0247983f.png" 
            alt="Google Play" 
            className="w-[124px] h-[36px]"
          />
        </a>
      </div>
    </div>
  );
};

export default DownloadLinks;
