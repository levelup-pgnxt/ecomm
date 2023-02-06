import mongoose from 'mongoose';
import Joi from 'joi';
import runSchema from './validator.js';
import UF from './unidadesFederacao.js';

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
        cpf: Joi.string().empty().required().pattern(/^[0-9]{11}$/).messages({
            'string.base': 'O campo "cpf" deve ser do tipo string!',
            'string.empty': 'O campo "cpf" não deve ser vazio!',
            'string.pattern.base': 'O campo "cpf" deve possuir 11 números!',
            'any.required': 'O campo "cpf" é obrigatório!'
        }),
        telefone: Joi.string().empty().required().pattern(/^[0-9]{10,13}$/).messages({
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
            cep: Joi.string().empty().required().pattern(/^[0-9]{8}$/).messages({
                'string.base': 'O campo "cep" deve ser do tipo string!',
                'string.empty': 'O campo "cep" não deve ser vazio!',
                'string.pattern.base': 'O campo "cep" deve conter 8 números!',
                'any.required': 'O campo "cep" é obrigatório!'
            }),
        }),
    })),

    paramsPassword(pass) {
        const regexString = new RegExp(/[a-z]/i);
        const regexNumber = new RegExp(/\d/);
        const regexSpecial = new RegExp(/[@$%#&*!?\.+-]/);
        const hasString = regexString.test(pass);
        const hasNumber = regexNumber.test(pass);
        const hasSpecial = regexSpecial.test(pass);

        const validatePass = hasString && hasNumber && hasSpecial;
        return validatePass;
    },

    paramsUf(uf) {
        return UF.includes(uf);
    },

    paramsCPF(cpf) {
        let Soma = 0;
        let Resto = 0;
        Soma = 0;
        if (cpf === "00000000000") return false;
        
        for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        
        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10))) return false;
        
        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);

        Resto = (Soma * 10) % 11;
        
        if ((Resto == 10) || (Resto == 11))  Resto = 0;

        if (Resto != parseInt(cpf.substring(10, 11))) return false;
        return true;        
    },
};

export default validates;
