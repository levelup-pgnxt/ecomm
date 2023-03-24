import { promisify } from 'util';
import { createHash } from 'crypto';
import blocklist from './blocklist.js';

const TOKEN_EXISTS = 1;

const existsAsync = promisify(blocklist.exists).bind(blocklist);

function geraTokenHash(token) {
  return createHash('sha256')
    .update(token)
    .digest('hex');
}

async function tokenExists(token) {
  const tokenHash = geraTokenHash(token);
  const resultado = await existsAsync(tokenHash);
  return resultado === TOKEN_EXISTS;
}

export default tokenExists;
