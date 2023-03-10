const express = require('express');
const passport = require('passport');
require('express-async-errors');
const routes = require('./routes');
const errorHandlerMiddleware = require('../src/auxiliaries/erroHandlerMiddleware');
const authenticationStrategyBearer = require('../src/authentication/authentication');

const app = express();

app.use(express.json());
passport.use(authenticationStrategyBearer);

routes(app);

app.use(errorHandlerMiddleware);

module.exports = app;
