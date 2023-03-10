/* eslint-disable import/extensions */
import LocalStrategy from 'passport-local';
import BearerStrategy from 'passport-http-bearer';
import UserService from '../services/usersService.js';
import NotFoundError from '../errors/NotFoundError.js';
import { verifyPassword } from './passwordManagement.js';
import { validadeTokenJWT } from './tokenManagement.js';

const authenticationStrategyLocal = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'senha',
  session: false,
}, async (email, senha, done) => {
  try {
    const user = await UserService.getUserByEmail(email);
    if (!user) {
      const message = 'Usuário não localizado!';
      throw new NotFoundError(message);
    }
    const result = await verifyPassword(senha, user.senha);
    if (!result) {
      const message = 'Usuário ou senha inválidos!';
      throw new NotFoundError(message);
    }
    done(null, user);
  } catch (erro) {
    done(erro);
  }
});

const authenticationStrategyBearer = new BearerStrategy(
  async (token, done) => {
    try {
      const payload = validadeTokenJWT(token);
      const user = await UserService.getUserById(payload.id);
      done(null, user);
    } catch (erro) {
      done(erro);
    }
  },
);

export { authenticationStrategyLocal, authenticationStrategyBearer };
