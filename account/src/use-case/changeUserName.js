/* eslint-disable import/extensions */
import { usersCustomer, validateEmailNewName } from '../services/utils.js';

const changeUserName = (data) => {
  const { value, error } = validateEmailNewName(data);
  if (error) return error.message;

  const result = usersCustomer.changeName(value);

  return result;
};

export default changeUserName;
