import { verify } from 'jsonwebtoken';
import BearerStrategy from 'passport-http-bearer';

const SECRET = process.env.SECRET_KEY;

const validadeTokenJWT = (token) => {
  const result = verify(token, SECRET);
  return result;
};

const authenticationStrategyBearer = new BearerStrategy(
  async (token, done) => {
    console.log(token);
    try {
      const result = validadeTokenJWT(token);
      done(null, result);
    } catch (erro) {
      done(erro);
    }
  },
);

export default authenticationStrategyBearer;
