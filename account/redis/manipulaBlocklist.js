import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
import blocklist from './blocklist.js';

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

export default addTokenToBlocklist;
