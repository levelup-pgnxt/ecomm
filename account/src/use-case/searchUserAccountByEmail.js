import { usersCustomer, validateEmail } from '../services/utils.js';

const seachrUserAccountByEmail = (data) => {
    const { value, error } = validateEmail(data);
    if (error) return error.message;

    const userByEmail = usersCustomer.getUserByEmail(value);

    const message = 'Usuário não localizado!';
    if (userByEmail === undefined) return message;
    return userByEmail;
};

export default seachrUserAccountByEmail;
