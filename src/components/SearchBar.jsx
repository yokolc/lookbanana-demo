import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [keyword, setKeyword] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      keyword,
      minPrice: minPrice ? parseFloat(minPrice) : null,
      maxPrice: maxPrice ? parseFloat(maxPrice) : null,
      sort: sortBy
    });
  };

  const handleFilterChange = (type, value) => {
    if (type === 'sort') {
      setSortBy(value);
    }
    
    onFilterChange({
      keyword,
      minPrice: minPrice ? parseFloat(minPrice) : null,
      maxPrice: maxPrice ? parseFloat(maxPrice) : null,
      sort: type === 'sort' ? value : sortBy
    });
  };

  const clearFilters = () => {
    setKeyword('');
    setMinPrice('');
    setMaxPrice('');
    setSortBy('featured');
    onSearch({});
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search products..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <SearchIcon />
          </button>
        </div>
        
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="filter-toggle"
        >
          Filters {isExpanded ? '−' : '+'}
        </button>
      </form>

      {isExpanded && (
        <div className="filter-panel">
          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min price"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  handleFilterChange('price', { min: e.target.value, max: maxPrice });
                }}
                className="price-input"
              />
              <span className="price-separator">-</span>
              <input
                type="number"
                placeholder="Max price"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  handleFilterChange('price', { min: minPrice, max: e.target.value });
                }}
                className="price-input"
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="a-z">Name: A to Z</option>
              <option value="z-a">Name: Z to A</option>
              <option value="date-new-old">Newest First</option>
              <option value="date-old-new">Oldest First</option>
            </select>
          </div>

          <div className="filter-actions">
            <button
              type="button"
              onClick={clearFilters}
              className="clear-filters-btn"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

export default SearchBar; 