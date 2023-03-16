const express = require('express');
const routes = require('./routes');

// eslint-disable-next-line no-unused-vars
const passport = require('./authentication/authStrategies.js');

const app = express();
app.use(express.json());
routes(app);

module.exports = app;
