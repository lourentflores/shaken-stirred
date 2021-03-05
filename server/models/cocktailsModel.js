const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://Lourent:JehoCruz@cluster0.3hwu4.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
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
