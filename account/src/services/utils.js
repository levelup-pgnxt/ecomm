/* eslint-disable no-underscore-dangle */
import Joi from 'joi';

class UsersCustomer {
  constructor() {
    this.usersCustomer = [];
  }

  push({ nome, email, senha }) {
    const id = this._getId();
    const createdDate = new Date().toLocaleDateString('sv');
    const newUser = {
      id,
      name: nome,
      email,
      password: senha,
      createdDate,
    };
    this.usersCustomer.push(newUser);
    return newUser;
  }

  _getId() {
    if (this.usersCustomer.length === 0) return 1;
    const lastIndex = this.usersCustomer.length - 1;
    return this.usersCustomer[lastIndex].id + 1;
  }

  _getLength() {
    return this.usersCustomer.length;
  }

  getUserByEmail({ email }) {
    const result = this.usersCustomer.find((user) => user.email === email);
    return result;
  }

  getUserById({ id }) {
    const result = this.usersCustomer.find((user) => user.id === id);
    return result;
  }

  remove({ email }) {
    const size = this.usersCustomer.length;
    for (let ind = 0; ind < size; ind += 1) {
      if (this.usersCustomer[ind].email === email) {
        this.usersCustomer.splice(ind, 1);
        return true;
      }
    }
    return false;
  }

  changeName({ email, newName }) {
    const size = this.usersCustomer.length;
    for (let ind = 0; ind < size; ind += 1) {
      if (this.usersCustomer[ind].email === email) {
        this.usersCustomer[ind].name = newName;
        return true;
      }
    }
    return false;
  }

  addAddress({ email, address }) {
    const size = this.usersCustomer.length;
    for (let ind = 0; ind < size; ind += 1) {
      if (this.usersCustomer[ind].email === email) {
        this.usersCustomer[ind].address = { ...address };
        return true;
      }
    }
    return false;
  }

  listAllUsers() {
    const allUsers = [];
    this.usersCustomer.forEach((user) => {
      allUsers.push([user.id, user.name, user.email, user.createdDate]);
    });
    return allUsers;
  }

  listUser({ email }) {
    const size = this.usersCustomer.length;
    for (let ind = 0; ind < size; ind += 1) {
      if (this.usersCustomer[ind].email === email) {
        return this.usersCustomer[ind];
      }
    }
    return false;
  }

  getUsersByState({ uf }) {
    const result = this.usersCustomer.filter((user) => user.address?.uf === uf);
    return result;
  }
}

const usersCustomer = new UsersCustomer();

const validateParams = (data) => {
  const limit = 6;
  const schema = Joi.object().keys({
    nome: Joi.string().min(limit).empty().required()
      .messages({
        'string.base': 'O campo "nome" deve ser do tipo texto!',
        'string.empty': 'O campo "nome" não deve ser vazio!',
        'string.min': `'O campo "nome" deve ter no mínimo ${limit} caracteres!'`,
        'any.required': 'O campo "nome" é obrigatório!',
      }),
    email: Joi.string().email().required().messages({
      'string.email': 'O campo dever ser um "email" válido!',
      'string.base': 'O campo "email" deve ser do tipo string!',
      'string.empty': 'O campo "email" não deve ser vazio!',
      'any.required': 'O campo "email" é obrigatório!',
    }),
    senha: Joi.string().min(limit).required().messages({
      'string.base': 'O campo "senha" deve ser do tipo string!',
      'string.empty': 'O campo "senha" não deve ser vazio!',
      'string.min': `'O campo "senha" deve ter no mínimo ${limit} caracteres!'`,
      'any.required': 'O campo "senha" é obrigatório!',
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
      'any.required': 'O campo "email" é obrigatório!',
    }),
  });

  const result = schema.validate(data);
  return result;
};

const validateUf = (data) => {
  const schema = Joi.object().keys({
    uf: Joi.string().uppercase().empty().required()
      .messages({
        'string.base': 'O campo "uf" deve ser do tipo texto!',
        'string.empty': 'O campo "uf" não deve ser vazio!',
        'any.required': 'O campo "uf" é obrigatório!',
      }),
  });

  const result = schema.validate(data);
  return result;
};

const validateEmailNewName = (data) => {
  const limit = 6;
  const schema = Joi.object().keys({
    email: Joi.string().email().required().messages({
      'string.email': 'O campo dever ser um "email" válido!',
      'string.base': 'O campo "email" deve ser do tipo string!',
      'string.empty': 'O campo "email" não deve ser vazio!',
      'any.required': 'O campo "email" é obrigatório!',
    }),
    newName: Joi.string().min(limit).empty().required()
      .messages({
        'string.base': 'O campo "newName" deve ser do tipo texto!',
        'string.empty': 'O campo "newName" não deve ser vazio!',
        'string.min': `'O campo "newName" deve ter no mínimo ${limit} caracteres!'`,
        'any.required': 'O campo "newName" é obrigatório!',
      }),
  });

  const result = schema.validate(data);
  return result;
};

const validateEmailAddress = (data) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required().messages({
      'string.email': 'O campo dever ser um "email" válido!',
      'string.base': 'O campo "email" deve ser do tipo string!',
      'string.empty': 'O campo "email" não deve ser vazio!',
      'any.required': 'O campo "email" é obrigatório!',
    }),
    address: Joi.object().required().keys({
      logradouro: Joi.string().empty().required().messages({
        'string.base': 'O campo "logradouro" deve ser do tipo texto!',
        'string.empty': 'O campo "logradouro" não deve ser vazio!',
        'any.required': 'O campo "logradouro" é obrigatório!',
      }),
      numero: Joi.string().empty().required().messages({
        'string.base': 'O campo "número" deve ser do tipo texto!',
        'string.empty': 'O campo "número" não deve ser vazio!',
        'any.required': 'O campo "número" é obrigatório!',
      }),
      complemento: Joi.string().messages({
        'string.base': 'O campo "complemento" deve ser do tipo texto!',
      }),
      bairro: Joi.string().empty().required().messages({
        'string.base': 'O campo "bairro" deve ser do tipo texto!',
        'string.empty': 'O campo "bairro" não deve ser vazio!',
        'any.required': 'O campo "bairro" é obrigatório!',
      }),
      cep: Joi.string().empty().required().messages({
        'string.base': 'O campo "cep" deve ser do tipo texto!',
        'string.empty': 'O campo "cep" não deve ser vazio!',
        'any.required': 'O campo "cep" é obrigatório!',
      }),
      cidade: Joi.string().empty().required().messages({
        'string.base': 'O campo "cidade" deve ser do tipo texto!',
        'string.empty': 'O campo "cidade" não deve ser vazio!',
        'any.required': 'O campo "cidade" é obrigatório!',
      }),
      uf: Joi.string().uppercase().empty().required()
        .messages({
          'string.base': 'O campo "uf" deve ser do tipo texto!',
          'string.empty': 'O campo "uf" não deve ser vazio!',
          'any.required': 'O campo "uf" é obrigatório!',
        }),
    }),
  });

  const result = schema.validate(data);
  return result;
};

export {
  validateParams,
  validateEmail,
  validateEmailNewName,
  validateEmailAddress,
  validateUf,
  usersCustomer,
};
