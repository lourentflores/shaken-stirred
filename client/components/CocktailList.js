import React from 'react';
import { CocktailCard } from './CocktailCard';

export const CocktailList = ({ cocktails }) => (
  <div className="all-recipes">
    {cocktails.map((cocktail) => (
      <CocktailCard key={cocktail._id} {...cocktail} />
    ))}
  </div>
);
