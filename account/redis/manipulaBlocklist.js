import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
import blocklist from './blocklist.js';

const existsAsync = promisify(blocklist.exists).bind(blocklist);
const setAsync = promisify(blocklist.set).bind(blocklist);

function geraTokenHash(token) {
  return createHash('sha256')
    .update(token)
    .digest('hex');
}

async function addTokenToBlocklist(token) {
  const expirationDate = jwt.decode(token).exp;
  const tokenHash = geraTokenHash(token);
  await setAsync(tokenHash, '');
  blocklist.expireat(token, expirationDate);
}

async function tokenExists(token) {
  const tokenHash = geraTokenHash(token);
  const resultado = await existsAsync(tokenHash);
  return resultado === 1;
}

export {
  addTokenToBlocklist,
  tokenExists,
};
