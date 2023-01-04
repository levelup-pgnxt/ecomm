import Joi from 'joi';

class UsersCustomer {
    constructor () {
        this.usersCustomer = [];
    };

    push ({ nome, email, senha }) {
        const id = this._getId();
        const createdDate = new Date().toLocaleDateString('sv');
        const newUser = {
            id,
            name: nome,
            email,
            password: senha,
            createdDate
        }
        this.usersCustomer.push(newUser);
        return newUser;
    };
    
    _getId () {
        if (this.usersCustomer.length === 0) return 1;
        const lastIndex = this.usersCustomer.length - 1;
        return this.usersCustomer[lastIndex].id + 1;
    };

    _getLength () {
        return this.usersCustomer.length;
    };

    getUserByEmail ({ email }) {
        const result = this.usersCustomer.find((user) => user.email === email);
        return result;
    };

    getUserById (id) {
        const result = this.usersCustomer.find((user) => user.id === id);
        return result;
    };

    remove ({ email }) {
        const size = this.usersCustomer.length;
        for (let ind = 0; ind < size; ind += 1) {
            if (this.usersCustomer[ind]["email"] === email) {
                this.usersCustomer.splice(ind, 1)
                return true;
            }
        };
        return false;
    };

    listAllUsers () {
        const allUsers = [];
        this.usersCustomer.forEach((user) => {
            allUsers.push([user.id, user.name, user.email, user.createdDate]);
        });
        return allUsers;
    };
};

const usersCustomer = new UsersCustomer;

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

const validateEmail = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required().messages({
            'string.email': 'O campo dever ser um "email" válido!',
            'string.base': 'O campo "email" deve ser do tipo string!',
            'string.empty': 'O campo "email" não deve ser vazio!',
            'any.required': 'O campo "email" é obrigatório!'
        }),
    });

    const result = schema.validate(data);
    return result;
};

export { UsersCustomer, validateParams, validateEmail, usersCustomer };
