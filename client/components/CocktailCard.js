import React from 'react';

export const CocktailCard = ({
  name,
  description,
  ingredients,
  preparation,
  image,
}) => (
  <div className="recipes">
    <span>
      <h2 className="name">{name}</h2>
    </span>
    <ul className="cocktail-card">
      <img alt="cocktail" src={image} />
      <li>
        <strong>Drunk History:</strong>
        {description}
      </li>
      <li>
        <strong>Ingredients:</strong>
        {ingredients}
      </li>
      <li>
        <strong>Preparation:</strong>
        {preparation}
      </li>
    </ul>
  </div>
);
