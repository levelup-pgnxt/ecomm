import { Strategy as BearerStrategy } from 'passport-http-bearer';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import tokenExists from '../../redis/manipulaBlocklist.js';

async function verificaTokenNaBlocklist(token) {
  const tokenNaBlocklist = await tokenExists(token);
  if (tokenNaBlocklist) {
    throw new jwt.JsonWebTokenError('Token inválido por logout.');
  }
}

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        await verificaTokenNaBlocklist(token);
        const payload = jwt.verify(token, process.env.CHAVE_JWT);
        done(null, payload.id, { token });
      } catch (erro) {
        done(erro);
      }
    },
  ),
);

export default passport;
