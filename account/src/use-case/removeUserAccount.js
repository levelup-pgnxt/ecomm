import { usersCustomer, validateEmail } from '../services/utils.js';

const removeUserAccount = (data) => {
    const { value, error } = validateEmail(data);
    if (error) return error.message;

    const result = usersCustomer.remove(value);

    return result;
};

export default removeUserAccount;
