import { usersCustomer, validateEmailAddress } from '../services/utils.js';

const addCustomerAddress = (data) => {
    const { value, error } = validateEmailAddress(data);
    if (error) return error.message;

    const result = usersCustomer.addAddress(value);

    return result;
};

export default addCustomerAddress;
