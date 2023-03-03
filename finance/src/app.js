const express = require('express');
const routes = require('./routes');
const errorHandlerMiddleware = require('../src/auxiliaries/erroHandlerMiddleware');

const app = express();

app.use(errorHandlerMiddleware, express.json());
routes(app);

module.exports = app;
