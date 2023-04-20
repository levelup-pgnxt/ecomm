/* eslint-disable import/extensions */
import { usersCustomer, validateParams } from '../services/utils.js';

const createUserAccount = (data) => {
  const { value, error } = validateParams(data);
  if (error) return error.message;

  const newUser = usersCustomer.push(value);

  return newUser;
};

export default createUserAccount;
