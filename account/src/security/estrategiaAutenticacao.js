import passport from 'passport';
import localStrategy from 'passport-local';
import bcryptjs from 'bcryptjs';
import bearerStrategy from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import accounts from '../models/account.js';

const LocalStrategy = localStrategy.Strategy;
const BearerStrategy = bearerStrategy.Strategy;

function verificarUsuario(account) {
  if (!account) throw new Error('Email não encontrado');
  // com o middleware esse erro só aparecerá no terminal
}

async function verificarSenha(senha, senhaHash) {
  const senhaValida = await bcryptjs.compareSync(senha, senhaHash);
  if (!senhaValida) throw new Error('Senha inválida');
}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senhaHash',
    session: false,

  }, async (email, senha, done) => {
    try {
      const account = await accounts.findOne({ email });
      verificarUsuario(account);
      await verificarSenha(senha, account.senhaHash);

      done(null, account);
    } catch (error) {
      done(error);
    }
  }),
);

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const payload = jwt.verify(token, process.env.CHAVE_JWT);
        const user = await accounts.findById(payload.id);
        done(null, user, { token });
      } catch (error) {
        done(error);
      }
    },
  ),
);
