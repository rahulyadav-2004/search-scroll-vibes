
import React from 'react';

const DownloadLinks = () => {
  return (
    <div className="flex flex-col items-center pb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
      <div className="text-white text-base mb-4">Get the app</div>
      <div className="flex gap-4">
        <a href="#" className="transition-transform hover:scale-105">
          <img 
            src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/scroll-jhb7n2/assets/rsfnuoje4ta9/App_Store.png" 
            alt="App Store" 
            className="w-[125px] h-[36px]"
          />
        </a>
        <a href="#" className="transition-transform hover:scale-105">
          <img 
            src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/scroll-jhb7n2/assets/guyleh1vnhec/Google_Play.png" 
            alt="Google Play" 
            className="w-[124px] h-[36px]"
          />
        </a>
      </div>
    </div>
  );
};

export default DownloadLinks;
