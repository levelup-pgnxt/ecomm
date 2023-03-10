import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import fetchAccount from '../useAPIs/fetchAPI.js';

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

export default passport;
