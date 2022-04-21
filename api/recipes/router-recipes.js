const express = require('express');
const Recipes = require('./model-recipes')

const router = express.Router();

router.use('*', (req, res) => {
    res.json({ api: 'up' })
})

router.use((err, req, res, next) => {
    res.status(500).json({ message: 'error', message: err.message, stack: err.stack })
})

module.exports = router;