import mongoose from 'mongoose';
import Joi from 'joi';
import runSchema from './validator.js';
import UF from './unidadesFederacao.js';
import NotFoundError from '../errors/NotFoundError.js';

const validates = {
    paramsID: (id) => mongoose.Types.ObjectId.isValid(id),

    paramsUser: runSchema(Joi.object().keys({
        nome: Joi.string().min(6).empty().required().pattern(/^[A-Z].+/).messages({
            'string.base': 'O campo "nome" deve ser do tipo string!',
            'string.empty': 'O campo "nome" não deve ser vazio!',
            'string.min': `'O campo "nome" deve ter no mínimo 6 caracteres!'`,
            'string.pattern.base': 'O campo "nome" deve iniciar por uma letra maiúscula!',
            'any.required': 'O campo "nome" é obrigatório!'
        }),
        email: Joi.string().empty().required().email().messages({
            'string.base': 'O campo "email" deve ser do tipo string!',
            'string.empty': 'O campo "email" não deve ser vazio!',
            'any.required': 'O campo "email" é obrigatório!'
        }),
        senha: Joi.string().min(8).empty().required().messages({
            'string.base': 'O campo "senha" deve ser do tipo string!',
            'string.empty': 'O campo "senha" não deve ser vazio!',
            'string.min': `'O campo "senha" deve ter no mínimo 8 caracteres!'`,
            'any.required': 'O campo "senha" é obrigatório!'
        }),
        cpf: Joi.string().empty().required().pattern(/^\d{11}$/).messages({
            'string.base': 'O campo "cpf" deve ser do tipo string!',
            'string.empty': 'O campo "cpf" não deve ser vazio!',
            'string.pattern.base': 'O campo "cpf" deve possuir 11 números!',
            'any.required': 'O campo "cpf" é obrigatório!'
        }),
        telefone: Joi.string().empty().required().pattern(/^\d{10,13}$/).messages({
            'string.base': 'O campo "telefone" deve ser do tipo string!',
            'string.empty': 'O campo "telefone" não deve ser vazio!',
            'string.pattern.base': 'O campo "telefone" deve possuir 1O ou 13 números!',
            'any.required': 'O campo "telefone" é obrigatório!'
        }),
        endereco: Joi.object().keys({
            logradouro: Joi.string().min(6).empty().required().pattern(/^[A-Z].+/).messages({
                'string.base': 'O campo "logradouro" deve ser do tipo string!',
                'string.empty': 'O campo "logradouro" não deve ser vazio!',
                'string.min': `'O campo "logradouro" deve ter no mínimo 6 caracteres!'`,
                'string.pattern.base': 'O campo "logradouro" deve iniciar por uma letra maiúscula!',
                'any.required': 'O campo "logradouro" é obrigatório!'
            }),
            numero: Joi.string().min(1).empty().required().pattern(/[a-z0-9\/]+/i).messages({
                'string.base': 'O campo "número" deve ser do tipo string!',
                'string.empty': 'O campo "número" não deve ser vazio!',
                'string.min': `'O campo "número" deve ter no mínimo 1 caracteres!'`,
                'string.pattern.base': 'O campo "número" deve conter ou números ou letras!',
                'any.required': 'O campo "número" é obrigatório!'
            }),
            complemento: Joi.string().min(3).empty().pattern(/^[A-Z].+/).messages({
                'string.base': 'O campo "complemento" deve ser do tipo string!',
                'string.empty': 'O campo "complemento" não deve ser vazio!',
                'string.min': `'O campo "complemento" deve ter no mínimo 3 caracteres!'`,
                'string.pattern.base': 'O campo "complemento" deve iniciar por uma letra maiúscula!',
                'any.required': 'O campo "complemento" é obrigatório!'
            }),
            bairro: Joi.string().min(3).empty().required().pattern(/^[A-Z].+/).messages({
                'string.base': 'O campo "bairro" deve ser do tipo string!',
                'string.empty': 'O campo "bairro" não deve ser vazio!',
                'string.min': `'O campo "bairro" deve ter no mínimo 3 caracteres!'`,
                'string.pattern.base': 'O campo "bairro" deve iniciar por uma letra maiúscula!',
                'any.required': 'O campo "bairro" é obrigatório!'
            }),
            cidade: Joi.string().min(3).empty().required().pattern(/^[A-Z].+/).messages({
                'string.base': 'O campo "cidade" deve ser do tipo string!',
                'string.empty': 'O campo "cidade" não deve ser vazio!',
                'string.min': `'O campo "cidade" deve ter no mínimo 3 caracteres!'`,
                'string.pattern.base': 'O campo "cidade" deve iniciar por uma letra maiúscula!',
                'any.required': 'O campo "cidade" é obrigatório!'
            }),
            uf: Joi.string().empty().required().pattern(/^[A-Z]{2}$/).messages({
                'string.base': 'O campo "uf" deve ser do tipo string!',
                'string.empty': 'O campo "uf" não deve ser vazio!',
                'string.pattern.base': 'O campo "uf" deve possuir duas letras maiúsculas!',
                'any.required': 'O campo "uf" é obrigatório!'
            }),
            cep: Joi.string().empty().required().pattern(/^\d{8}$/).messages({
                'string.base': 'O campo "cep" deve ser do tipo string!',
                'string.empty': 'O campo "cep" não deve ser vazio!',
                'string.pattern.base': 'O campo "cep" deve conter 8 números!',
                'any.required': 'O campo "cep" é obrigatório!'
            }),
        }),
    })),

    paramsPassword(pass) {
        const regexPassword = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/);
        const hasPassword = regexPassword.test(pass);
        if (!hasPassword) {
            const regexStringLower = new RegExp(/[a-z]/);
            const hasStringLower = regexStringLower.test(pass);
            if (!hasStringLower) {
                const message = 'Senha deve possuir pelo menos 1 caracter minúsculo!';
                throw new NotFoundError(message);
            }
    
            const regexStringUpper = new RegExp(/[A-Z]/);
            const hasStringUpper = regexStringUpper.test(pass);
            if (!hasStringUpper) {
                const message = 'Senha deve possuir pelo menos 1 caracter maiúsculo!';
                throw new NotFoundError(message);
            }

            const regexNumber = new RegExp(/\d/);
            const hasNumber = regexNumber.test(pass);
            if (!hasNumber) {
                const message = 'Senha deve possuir pelo menos 1 número!';
                throw new NotFoundError(message);
            }

            const regexSpecial = new RegExp(/[@$%#&*!?\.+-]/);
            const hasSpecial = regexSpecial.test(pass);
            if (!hasSpecial) {
                const message = 'Senha deve possuir pelo menos 1 caracter especial "@$%#&*!?.+-"!';
                throw new NotFoundError(message);
            }
        };
    },

    paramsUf(uf) {
        const isValidUF = UF.includes(uf);
        if (!isValidUF) {
            const message = 'Estado da Federação inválido!';
            throw new NotFoundError(message);
        }
    },

    paramsCPF(cpf) {
        const validateCPF = (cpf) => {
            let resto = 0;
            if (cpf === "00000000000") return false;
            
            resto = somaCPF(cpf, 11);            

            if ((resto === 10) || (resto === 11))  resto = 0;
            if (resto != parseInt(cpf.substring(9, 10))) return false;
            
            resto = somaCPF(cpf, 12);

            if ((resto === 10) || (resto === 11))  resto = 0;
    
            if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
            return true;
        };
        const isValidCPF = validateCPF(cpf);
        if (!isValidCPF) {
            const message = 'CPF inválido!';
            throw new NotFoundError(message);
        }
    },
};

const somaCPF = (cpf, dig) => {
    let soma = 0;
    for (let i = 1; i <= dig - 2; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (dig - i);
    const resto = (soma * 10) % 11;
    return resto;
};

export default validates;
