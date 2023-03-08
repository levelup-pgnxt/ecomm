/* eslint-disable import/extensions */
import bcrypt from 'bcryptjs';
// import NotFoundError from '../errors/NotFoundError.js';

const createHashWihtSalt = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  const passWhitHash = await bcrypt.hash(pass, salt);
  return passWhitHash;
};

const verifyPassword = async (pass, passHash) => {
  const result = await bcrypt.compare(pass, passHash);
  return result;
};

export { createHashWihtSalt, verifyPassword };
