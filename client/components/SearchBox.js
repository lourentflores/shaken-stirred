import React from 'react';

export const SearchBox = ({ value, handleChange }) => (
  <input
    placeholder="Search for a cocktail"
    type="search"
    value={value}
    onChange={handleChange}
  />
);
