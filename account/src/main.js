import crypto from 'crypto';

console.log('iniciando account');

const secretKey = crypto.randomBytes(256).toString('base64');
console.log(secretKey);
