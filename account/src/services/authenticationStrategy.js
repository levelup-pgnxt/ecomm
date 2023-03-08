/* eslint-disable import/extensions */
import LocalStrategy from 'passport-local';
import UserService from './usersService.js';
import NotFoundError from '../errors/NotFoundError.js';
import { verifyPassword } from './passwordManagement.js';

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

export default authenticationStrategyLocal;
