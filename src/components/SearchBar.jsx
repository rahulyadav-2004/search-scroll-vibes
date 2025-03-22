
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="search-field">
      <Search className="w-4 h-4 text-[#818C99] flex-shrink-0" />
      <span className="ml-2 text-base font-normal text-[#818C99] font-roboto">Search Scroll</span>
    </div>
  );
};

export default SearchBar;
