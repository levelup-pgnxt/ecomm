/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';

function criaTokenTJWT(usuario) {
  const payload = {
    id: usuario._id,
  };

  const token = jwt.sign(payload, process.env.CHAVE_JWT, { expiresIn: '15m' });
  return token;
}

export default criaTokenTJWT;
