const mongoose = require ('mongoose');

const typeRecipe = ['Breakfast', 'Launch', 'Dessert'];


const recipeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  calories: {type: Number, required: true},
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingrediente' }],
  type: {type: String, enum:typeRecipe, required: true},
})

const Recipe = mongoose.model('Recipe', recipeSchema)

model.exports = Recipe;