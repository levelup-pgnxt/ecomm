import mongoose from 'mongoose';
import Joi from 'joi';
import runSchema from './validator.js';

const limit = 3;

const validates = {
    paramsCategory: runSchema(Joi.object().keys({
        nome: Joi.string().min(limit).empty().required().pattern(/^[A-Z][A-ZÇÂÃÕÉÁÓ\s]+$/).messages({
            'string.base': 'O campo "nome" deve ser do tipo texto!',
            'string.empty': 'O campo "nome" não deve ser vazio!',
            'string.min': `'O campo "nome" deve ter no mínimo ${limit} caracteres!'`,
            'string.pattern.base': 'O campo "nome" deve iniciar por uma letra e todas devem ser maiúsculas!',
            'any.required': 'O campo "nome" é obrigatório!'
        }),
    })),

    paramsID: (id) => mongoose.Types.ObjectId.isValid(id),

    paramsProduct: runSchema(Joi.object().keys({
        nome: Joi.string().min(limit).empty().required().pattern(/^[A-Z].+/).messages({
            'string.base': 'O campo "nome" deve ser do tipo texto!',
            'string.empty': 'O campo "nome" não deve ser vazio!',
            'string.min': `O campo "nome" deve ter no mínimo ${limit} caracteres!`,
            'string.pattern.base': 'O campo "nome" deve iniciar por uma letra maiúscula!',
            'any.required': 'O campo "nome" é obrigatório!'
        }),
        descricao: Joi.string().min(limit).empty().required().pattern(/^[A-Z].+/).messages({
            'string.base': 'O campo "descrição" deve ser do tipo texto!',
            'string.empty': 'O campo "descrição" não deve ser vazio!',
            'string.min': `O campo "descrição" deve ter no mínimo ${limit} caracteres!`,
            'string.pattern.base': 'O campo "descrição" deve iniciar por uma letra maiúscula!',
            'any.required': 'O campo "descrição" é obrigatório!'
        }),
        slug: Joi.string().min(limit).empty().required().pattern(/^[A-Za-z0-9-]+$/).messages({
            'string.base': 'O campo "slug" deve ser do tipo texto!',
            'string.empty': 'O campo "slug" não deve ser vazio!',
            'string.min': `O campo "slug" deve ter no mínimo ${limit} caracteres!`,
            'string.pattern.base': 'O campo "slug" deve conter apenas letras(maiúsculas ou minúsculas), números ou hífens!',
            'any.required': 'O campo "slug" é obrigatório!'
        }),
        precoUnitario: Joi.number().precision(2).greater(0).required().messages({
            'number.base': 'O campo "preço unitário" deve ser do tipo numérico!',
            'number.greater': 'O campo "preço unitário" deve ser maior que zero!',
            'any.required': 'O campo "preço unitário" é obrigatório!'
        }),
        estoque: Joi.number().greater(0).less(10000).required().messages({
            'number.base': 'O campo "estoque" deve ser do tipo numérico!',
            'number.greater': 'O campo "estoque" deve ser maior que zero!',
            'number.less': 'O campo "estoque" deve ser menor que 10.000!',
            'any.required': 'O campo "estoque" é obrigatório!'
        }),
        desconto: Joi.number().precision(2).messages({
            'number.base': 'O campo "desconto" deve ser do tipo numérico!',
        }),
        categoria: Joi.string().empty().required().messages({
            'string.base': 'O campo "categoria" deve ser do tipo texto!',
            'string.empty': 'O campo "categoria" não deve ser vazio!',
            'any.required': 'O campo "categoria" é obrigatório!'
        }),
    })),

    paramsUpdateProduct: runSchema(Joi.object().keys({
        nome: Joi.string().min(limit).empty().pattern(/^[A-Z].+/).messages({
            'string.base': 'O campo "nome" deve ser do tipo texto!',
            'string.empty': 'O campo "nome" não deve ser vazio!',
            'string.min': `O campo "nome" deve ter no mínimo ${limit} caracteres!`,
            'string.pattern.base': 'O campo "nome" deve iniciar por uma letra maiúscula!',
        }),
        descricao: Joi.string().min(limit).empty().pattern(/^[A-Z].+/).messages({
            'string.base': 'O campo "descrição" deve ser do tipo texto!',
            'string.empty': 'O campo "descrição" não deve ser vazio!',
            'string.min': `O campo "descrição" deve ter no mínimo ${limit} caracteres!`,
            'string.pattern.base': 'O campo "descrição" deve iniciar por uma letra maiúscula!',
        }),
        slug: Joi.string().min(limit).empty().pattern(/^[A-Za-z0-9-]+$/).messages({
            'string.base': 'O campo "slug" deve ser do tipo texto!',
            'string.empty': 'O campo "slug" não deve ser vazio!',
            'string.min': `O campo "slug" deve ter no mínimo ${limit} caracteres!`,
            'string.pattern.base': 'O campo "slug" deve conter apenas letras(maiúsculas ou minúsculas), números ou hífens!',
        }),
        precoUnitario: Joi.number().precision(2).greater(0).messages({
            'number.base': 'O campo "preço unitário" deve ser do tipo numérico!',
            'number.greater': 'O campo "preço unitário" deve ser maior que zero!',
        }),
        estoque: Joi.number().greater(0).less(10000).messages({
            'number.base': 'O campo "estoque" deve ser do tipo numérico!',
            'number.greater': 'O campo "estoque" deve ser maior que zero!',
            'number.less': 'O campo "estoque" deve ser menor que 10.000!',
        }),
        desconto: Joi.number().precision(2).messages({
            'number.base': 'O campo "desconto" deve ser do tipo numérico!',
        }),
        categoria: Joi.string().empty().messages({
            'string.base': 'O campo "categoria" deve ser do tipo texto!',
            'string.empty': 'O campo "categoria" não deve ser vazio!',
        }),
    })),

    valuesMaxMin: runSchema(Joi.object().keys({
        max: Joi.number().precision(2).greater(0).required().messages({
            'number.base': 'O "valor máximo" deve ser do tipo numérico!',
            'number.greater': 'O "valor máximo" deve ser maior que zero!',
            'any.required': 'O "valor máximo" é obrigatório!'
        }),
        min: Joi.number().precision(2).greater(0).required().messages({
            'number.base': 'O "valor mínimo" deve ser do tipo numérico!',
            'number.greater': 'O "valor mínimo" deve ser maior que zero!',
            'any.required': 'O "valor mínimo" é obrigatório!'
        }),
    })),

    valueStock: runSchema(Joi.object().keys({
        stock: Joi.number().integer().greater(0).required().messages({
            'number.base': 'O valor do "estoque" deve ser do tipo numérico!',
            'number.greater': 'O valor do "estoque" deve ser maior que zero!',
            'any.required': 'O valor do "estoque" é obrigatório!'
        }),
    })),
};

export default validates;
