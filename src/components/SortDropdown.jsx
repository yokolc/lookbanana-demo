import React from 'react';
import './SortDropdown.css';

const SortDropdown = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'best-selling', label: 'Best selling' },
    { value: 'a-z', label: 'Alphabetically, A-Z' },
    { value: 'z-a', label: 'Alphabetically, Z-A' },
    { value: 'price-low-high', label: 'Price, low to high' },
    { value: 'price-high-low', label: 'Price, high to low' },
    { value: 'date-old-new', label: 'Date, old to new' },
    { value: 'date-new-old', label: 'Date, new to old' }
  ];

  return (
    <div className="sort-dropdown-container">
      <label htmlFor="sort-select" className="sort-label">Sort</label>
      <select
        id="sort-select"
        className="sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown; 