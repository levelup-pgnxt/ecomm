import { UsersCustomer, validateParams } from '../services/utils.js';

const usersCustomer = new UsersCustomer;

const createUserAccount = (data) => {
    const { value, error } = validateParams(data);
    if (error) return error.message;

    const newUser = usersCustomer.push(value);

    return newUser;
};

export default createUserAccount;
