/* eslint-disable import/no-extraneous-dependencies */
import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';
import Account from './controller/accountController.js';

function verificaUsuario(usuario) {
  if (!usuario) {
    throw new Error('Usuario ou senha inválidos.');
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

export default passport;
