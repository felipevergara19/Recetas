// Agregar las dependencias de la ruta
const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipes');

router.post('/addRecepi', async (req,res) => {
  try {
    const newRecepi = new Recipe(req.body);
    await newRecepi.save();
    res.status(201).json({mensaje: 'Receta Agregada Exitozamente', recipe: newRecepi});  
  } catch (error) {
    res.status(500).json({error: 'Erro al agregar la receta'});
  }
});

module.exports = router;
