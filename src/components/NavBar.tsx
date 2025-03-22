
import React from 'react';
import SearchBar from './SearchBar';

const NavBar: React.FC = () => {
  return (
    <div className="w-full h-[58px] bg-white flex items-center px-4 md:px-[52px] justify-between border-b border-gray-100">
      <div className="flex items-center gap-3 w-full md:w-[307px]">
        <SearchBar />
      </div>
      <div className="hidden md:block">
        <button className="flex items-center justify-center h-10 w-[156px] bg-black rounded-lg border border-white text-white font-sf-pro text-[15px] font-semibold transition-all hover:bg-opacity-90 active:bg-opacity-80">
          Start Selling
        </button>
      </div>
    </div>
  );
};

export default NavBar;
