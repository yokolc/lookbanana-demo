import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // You would typically navigate to a search results page with the search term as a query parameter
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className={`flex items-center bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 ${
          isActive ? 'w-64 border-2 border-blue-500' : 'w-40 border border-gray-200'
        }`}>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-3 bg-transparent border-none outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
          <button
            type="submit"
            className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* Optional: Search Suggestions Dropdown */}
      {isActive && searchTerm.length > 2 && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-64 overflow-y-auto">
          <p className="px-4 py-2 text-sm text-gray-500">
            Enter to search for "{searchTerm}"
          </p>
          {/* Here you would map through search suggestions */}
          {/* This is a placeholder for demonstration */}
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <p className="text-sm font-medium text-gray-700">Sample Suggestion 1</p>
            <p className="text-xs text-gray-500">Category: Electronics</p>
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <p className="text-sm font-medium text-gray-700">Sample Suggestion 2</p>
            <p className="text-xs text-gray-500">Category: Home</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;