// Agregar las dependencias de la ruta
const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes");

router.post("/addRecepi", async (req, res) => {
  try {
    const newRecepi = new Recipe(req.body);
    await newRecepi.save();
    res
      .status(201)
      .json({ mensaje: "Receta Agregada Exitozamente", recipe: newRecepi });
  } catch (error) {
    console.error("Error al agregar la receta:", error.message);
    res.status(500).json({ error: "Error al agregar la receta" });
  }
});

router.get("/searchRecepi", async (req, res) => {
  try {
    const ingredientIDs = req.body.ingredients;
    const recetasFiltradas = await Recipe.find({
      ingredients: { $in: ingredientIDs },
    });
    if (recetasFiltradas.length === 0) {
      return res.status(404).json({ mensaje: `Ingrediente no encontrado` });
    }
    res
      .status(200)
      .json({ mensaje: "Receta Encontrada", recipe: recetasFiltradas });
  } catch (error) {
    console.error("Error al buscar la receta:", error.message);
    res.status(500).json({ error: "Error al buscar la receta" });
  }
});

module.exports = router;
