import bcrypt from 'bcryptjs';

const createHashWihtSalt = (pass) => {
  console.log(pass);
  const salt = bcrypt.genSaltSync(10);
  const passWhitHash = bcrypt(pass, salt);
  return passWhitHash;
};

const verifyPassword = (pass, passHash) => {
  const result = bcrypt.compareSync(pass, passHash);
  return result;
};

console.log(createHashWihtSalt('5pAwX2diMD@'));

export { createHashWihtSalt, verifyPassword };
