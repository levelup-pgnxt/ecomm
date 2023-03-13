import jwt from 'jsonwebtoken';

export default function createTokenJWT(account) {
  const payload = {
    // eslint-disable-next-line no-underscore-dangle
    id: account._id,
  };

  const createToken = jwt.sign(payload, process.env.CHAVE_JWT, { expiresIn: '1d' });
  return createToken;
}
