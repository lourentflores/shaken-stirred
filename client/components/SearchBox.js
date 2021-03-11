import React from 'react';

export const SearchBox = ({ value, handleChange}) => (
  <div className="search-form">
    <input
      placeholder="Search for a cocktail"
      type="search"
      value={value}
      onChange={handleChange}
    />
  </div>
    
);
