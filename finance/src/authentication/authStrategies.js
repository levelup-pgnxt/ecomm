/* eslint-disable import/no-extraneous-dependencies */
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');
const fetchAccount = require('../useAPIs/fetchAPI.js');

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const payload = jwt.verify(token, process.env.CHAVE_JWT);
        const usuario = await fetchAccount(payload.id);
        done(null, usuario);
      } catch (erro) {
        done(erro);
      }
    },
  ),
);

module.exports = passport;
