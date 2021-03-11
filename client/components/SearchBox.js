import React from 'react';

export const SearchBox = ({ value, handleChange }) => (
  <div className="search-form">
    <input
      type="search"
      value={value}
      onChange={handleChange}
    />
    <button className="search-button" type='button'>Search for Cocktail</button>
  </div>
    
);
