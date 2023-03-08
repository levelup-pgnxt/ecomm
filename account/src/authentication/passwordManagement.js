/* eslint-disable import/extensions */
import bcrypt from 'bcryptjs';

const createHashWithSalt = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  const passWhitHash = await bcrypt.hash(pass, salt);
  return passWhitHash;
};

const verifyPassword = async (pass, passHash) => {
  const result = await bcrypt.compare(pass, passHash);
  return result;
};

export { createHashWithSalt, verifyPassword };
