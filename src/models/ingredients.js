const mongoose = require ('mongoose');


const ingredietSchema = new mongoose.Schema({
  name: {type: String, required: true},
})

const Ingredient = mongoose.model('Ingredient', ingredietSchema)

model.exports = Ingredient;