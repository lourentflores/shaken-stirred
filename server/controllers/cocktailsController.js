const { Cocktail } = require('../models/cocktailsModel.js');

const cocktailsController = {};

cocktailsController.getCocktails = async (req, res, next) => {
  try {
    const response = await Cocktail.find({});
    res.locals.cocktails = response;
    next();
  } catch (err) {
    next({ log: `cocktailsController.getCocktails: ${err}` });
  }
};

cocktailsController.addCocktail = async (req, res, next) => {
  try {
    console.log('request:', req.body);
    const response = await Cocktail.create(req.body);
    res.locals.newCocktail = response;
    next();
  } catch (err) {
    next({ log: `cocktailsController.addCocktail: ${err}` });
  }
};

module.exports = cocktailsController;
