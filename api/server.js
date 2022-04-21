const express = require('express');
const recipesRouter = require('./recipes/router-recipes');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);

module.exports = server;