
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-field relative">
      <Search className="w-4 h-4 text-[#818C99] absolute left-3 top-1/2 transform -translate-y-1/2 flex-shrink-0" />
      <Input
        type="text"
        placeholder="Search Scroll"
        value={searchQuery}
        onChange={handleSearch}
        className="pl-9 pr-3 h-9 border-none bg-transparent text-base font-normal text-black font-roboto placeholder:text-[#818C99]"
      />
    </div>
  );
};

export default SearchBar;
