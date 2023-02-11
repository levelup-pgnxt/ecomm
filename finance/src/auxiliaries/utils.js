const Joi = require('joi');
const runSchema = require('../auxiliaries/validator');

const validates = {
    paramsPayment: runSchema(Joi.object().keys({
        value: Joi.number().precision(2).greater(0).messages({
            'number.base': 'O campo "valor" deve ser do tipo numérico!',
            'number.greater': 'O campo "valor" deve ser maior que zero!',
            'any.required': 'O campo "valor" é obrigatório!'
        }),
        name: Joi.string().min(3).empty().required().pattern(/^[A-Za-z\s]+$/).messages({
            'string.base': 'O campo "nome" deve ser do tipo texto!',
            'string.empty': 'O campo "nome" não deve ser vazio!',
            'string.min': 'O campo "nome" deve ter no mínimo 3 caracteres!',
            'string.pattern.base': 'O campo "nome" deve possuir apenas letras!',
            'any.required': 'O campo "nome" é obrigatório!'
        }),
        number: Joi.string().creditCard().empty().required().pattern(/^\d{16}$/).messages({
            'string.base': 'O campo "número do cartão" deve ser do tipo texto!',
            'string.empty': 'O campo "número do cartão" não deve ser vazio!',
            'string.min': 'O campo "número do cartão" deve ter 16 números!',
            'string.pattern.base': 'O campo "número do cartão" deve conter 16 números!',
            'string.creditCard': 'O campo deve conter um número de cartão válido!',
            'any.required': 'O campo "número do cartão" é obrigatório!'
        }),
        expiration: Joi.string().empty().required().pattern(/^([0-1]\d)\/(20\d{2})$/).messages({
            'string.base': 'O campo "expiração" deve ser do tipo texto!',
            'string.empty': 'O campo "expiração" não deve ser vazio!',
            'string.pattern.base': 'O campo "expiração" deve possuir MM/AAAA (Mês/Ano)!',
            'any.required': 'O campo "expiração" é obrigatório!'
        }),
        cvv: Joi.string().empty().required().pattern(/^\d{3}/).messages({
            'string.base': 'O campo "cvv" deve ser do tipo texto!',
            'string.empty': 'O campo "cvv" não deve ser vazio!',
            'string.pattern.base': 'O campo "cvv" deve conter 3 números!',
            'any.required': 'O campo "cvv" é obrigatório!'
        }),
    })),
};

module.exports = validates;
