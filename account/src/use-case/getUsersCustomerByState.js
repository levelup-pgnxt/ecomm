/* eslint-disable import/extensions */
import { usersCustomer, validateUf } from '../services/utils.js';

const getUsersCustomerByState = (data) => {
  const { value, error } = validateUf(data);
  if (error) return error.message;

  const result = usersCustomer.getUsersByState(value);

  return result;
};

export default getUsersCustomerByState;
