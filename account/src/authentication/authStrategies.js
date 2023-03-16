/* eslint-disable import/no-extraneous-dependencies */
import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import Account from '../controller/accountController.js';
import Accounts from '../models/Account.js';
import { tokenExists } from '../../redis/manipulaBlocklist.js';

function verificaUsuario(usuario) {
  if (!usuario) {
    throw new Error('Usuario ou senha inválidos.');
  }
}

async function verificaTokenNaBlocklist(token) {
  const tokenNaBlocklist = await tokenExists(token);
  if (tokenNaBlocklist) {
    throw new jwt.JsonWebTokenError('Token inválido por logout.');
  }
}

async function verificaSenha(senha, senhaHash) {
  const senhaValida = await bcrypt.compare(senha, senhaHash);

  if (!senhaValida) {
    throw new Error('Usuario ou senha inválidos.');
  }
}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  }, async (email, senha, done) => {
    try {
      const usuario = await Account.buscaPorEmail(email);
      verificaUsuario(usuario);
      const senhaHash = usuario.password;
      await verificaSenha(senha, senhaHash);

      done(null, usuario);
    } catch (erro) {
      done(erro);
    }
  }),
);

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        await verificaTokenNaBlocklist(token);
        const payload = jwt.verify(token, process.env.CHAVE_JWT);
        const usuario = await Accounts.findById(payload.id);
        done(null, usuario, { token });
      } catch (erro) {
        done(erro);
      }
    },
  ),
);

export default passport;
