const express = require('express');
const Recipes = require('./model-recipes')

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(next);
  });


router.use((err, req, res, next) => {
    res.status(500).json({ message: 'error', message: err.message, stack: err.stack })
})

module.exports = router;