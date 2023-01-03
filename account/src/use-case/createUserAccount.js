import Joi from 'joi';
import UsersCustomer from '../services/utils.js';

const usersCustomer = new UsersCustomer;

const createUserAccount = (data) => {
    const { value, error } = validateParams(data);
    if (error) return error.message;

    const newUser = usersCustomer.push(value);

    return newUser;
};

const validateParams = (data) => {
    const limit = 6;
    const schema = Joi.object().keys({
        nome: Joi.string().min(limit).empty().required().messages({
            'string.base': 'O campo "nome" deve ser do tipo texto!',
            'string.empty': 'O campo "nome" não deve ser vazio!',
            'string.min': `'O campo "nome" deve ter no mínimo ${limit} caracteres!'`,
            'any.required': 'O campo "nome" é obrigatório!'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'O campo dever ser um "email" válido!',
            'string.base': 'O campo "email" deve ser do tipo string!',
            'string.empty': 'O campo "email" não deve ser vazio!',
            'any.required': 'O campo "email" é obrigatório!'
        }),
        senha: Joi.string().min(limit).required().messages({
            'string.base': 'O campo "senha" deve ser do tipo string!',
            'string.empty': 'O campo "senha" não deve ser vazio!',
            'string.min': `'O campo "senha" deve ter no mínimo ${limit} caracteres!'`,
            'any.required': 'O campo "senha" é obrigatório!'
        }),
    });

    const result = schema.validate(data);
    return result;
};

export default createUserAccount;
