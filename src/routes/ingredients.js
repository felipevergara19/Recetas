// Agregar las dependencias de la ruta
const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredients');

router.post('/addIngredient', async (req,res) => {
  try {
    const newIngredient = new Ingredient(req.body);
    await newIngredient.save();
    res.status(201).json({mensaje: 'Ingrediente Agregado Exitozamente', ingredient: newIngredient});  
  } catch (error) {
    res.status(500).json({error: 'Error al agregar el ingrediente'});
  }
});

module.exports = router;