const express = require('express');
const cocktailsController = require('../controllers/cocktailsController');

const router = express.Router();

router.get('/', cocktailsController.getCocktails, (req, res) =>
  res.status(200).json(res.locals.cocktails)
);

router.post('/', cocktailsController.addCocktail, (req, res) =>
  res.status(200).json(res.locals.newCocktail)
);

module.exports = router;


