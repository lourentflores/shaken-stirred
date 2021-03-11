import React from 'react';

export const CocktailCard = ({
  name,
  description,
  ingredients,
  preparation,
  img,
}) => (
  <div className="recipes">
    <span>
      <h2 className="name">{name}</h2>
    </span>
    <span>
        <img className="cocktail-img" alt="cocktail" src={img} />
    </span>
    <ul className="cocktail-card">
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
