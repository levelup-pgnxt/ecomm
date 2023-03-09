require('dotenv').config();
const express = require('express');
require('express-async-errors');
const routes = require('./routes');
const errorHandlerMiddleware = require('../src/auxiliaries/erroHandlerMiddleware');

const app = express();

app.use(express.json());

routes(app);

app.use(errorHandlerMiddleware);

module.exports = app;
