const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Cocktails',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
  name: String,
  description: String,
  ingredients: String,
  preparation: String,
  method: String,
  img: String,
});

const Cocktail = mongoose.model('cocktail', cocktailSchema);

module.exports = { Cocktail };
