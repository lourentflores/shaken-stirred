import React from 'react';
import { CocktailCard } from './CocktailCard';

export const CocktailList = ({ cocktails }) => (
  <div className="all-recipes">
    {cocktails.map((cocktail) => (
      <CocktailCard
        key={cocktail._id}
        name={cocktail.name}
        description={cocktail.description}
        ingredients={cocktail.ingredients}
        preparation={cocktail.preparation}
        image={cocktail.img}></CocktailCard>
    ))}
  </div>
);
