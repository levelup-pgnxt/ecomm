import bcrypt from 'bcryptjs';

const createHashWihtSalt = (pass) => {
  const salt = bcrypt.genSaltSync(10);
  const passWhitHash = bcrypt.hashSync(pass, salt);
  return passWhitHash;
};

const verifyPassword = (pass, passHash) => {
  const result = bcrypt.compareSync(pass, passHash);
  return result;
};

export { createHashWihtSalt, verifyPassword };
