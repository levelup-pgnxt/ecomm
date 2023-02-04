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
            'string.min': `'O campo "nome" deve ter no mínimo ${limit} caracteres!'`,
            'string.pattern.base': 'O campo "nome" deve iniciar por uma letra maiúscula!',
            'any.required': 'O campo "nome" é obrigatório!'
        }),
        descricao: Joi.string().min(limit).empty().required().pattern(/^[A-Z].+/).messages({
            'string.base': 'O campo "descrição" deve ser do tipo texto!',
            'string.empty': 'O campo "descrição" não deve ser vazio!',
            'string.min': `'O campo "descrição" deve ter no mínimo ${limit} caracteres!'`,
            'string.pattern.base': 'O campo "descrição" deve iniciar por uma letra maiúscula!',
            'any.required': 'O campo "descrição" é obrigatório!'
        }),
        slug: Joi.string().min(limit).empty().required().pattern(/^[A-Za-z0-9-\S]+$/).messages({
            'string.base': 'O campo "slug" deve ser do tipo texto!',
            'string.empty': 'O campo "slug" não deve ser vazio!',
            'string.min': `'O campo "slug" deve ter no mínimo ${limit} caracteres!'`,
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

    valuesMaxMin: runSchema(Joi.object().keys({
        max: Joi.number().precision(2).greater(0).required().messages({
            'number.base': 'O campo "máximo" deve ser do tipo numérico!',
            'number.greater': 'O campo "máximo" deve ser maior que zero!',
            'any.required': 'O campo "máximo" é obrigatório!'
        }),
        min: Joi.number().precision(2).greater(0).required().messages({
            'number.base': 'O campo "mínimo" deve ser do tipo numérico!',
            'number.greater': 'O campo "mínimo" deve ser maior que zero!',
            'any.required': 'O campo "mínimo" é obrigatório!'
        }),
    })),

    valueStock: runSchema(Joi.object().keys({
        stock: Joi.number().integer().greater(0).required().messages({
            'number.base': 'O campo "estoque" deve ser do tipo numérico!',
            'number.greater': 'O campo "estoque" deve ser maior que zero!',
            'any.required': 'O campo "estoque" é obrigatório!'
        }),
    })),
};


// const validateEmail = (data) => {
//     const schema = Joi.object().keys({
//         email: Joi.string().email().required().messages({
//             'string.email': 'O campo dever ser um "email" válido!',
//             'string.base': 'O campo "email" deve ser do tipo string!',
//             'string.empty': 'O campo "email" não deve ser vazio!',
//             'any.required': 'O campo "email" é obrigatório!'
//         }),
//     });

//     const result = schema.validate(data);
//     return result;
// };

// const validateUf = (data) => {
//     const schema = Joi.object().keys({
//         uf: Joi.string().uppercase().empty().required().messages({
//             'string.base': 'O campo "uf" deve ser do tipo texto!',
//             'string.empty': 'O campo "uf" não deve ser vazio!',
//             'any.required': 'O campo "uf" é obrigatório!',
//         }),
// });

//     const result = schema.validate(data);
//     return result;
// };

// const validateEmailNewName = (data) => {
//     const limit = 6;
//     const schema = Joi.object().keys({
//         email: Joi.string().email().required().messages({
//             'string.email': 'O campo dever ser um "email" válido!',
//             'string.base': 'O campo "email" deve ser do tipo string!',
//             'string.empty': 'O campo "email" não deve ser vazio!',
//             'any.required': 'O campo "email" é obrigatório!'
//         }),
//         newName: Joi.string().min(limit).empty().required().messages({
//             'string.base': 'O campo "newName" deve ser do tipo texto!',
//             'string.empty': 'O campo "newName" não deve ser vazio!',
//             'string.min': `'O campo "newName" deve ter no mínimo ${limit} caracteres!'`,
//             'any.required': 'O campo "newName" é obrigatório!'
//         }),
//     });

//     const result = schema.validate(data);
//     return result;
// };

// const validateEmailAddress = (data) => {
//     const schema = Joi.object().keys({
//         email: Joi.string().email().required().messages({
//             'string.email': 'O campo dever ser um "email" válido!',
//             'string.base': 'O campo "email" deve ser do tipo string!',
//             'string.empty': 'O campo "email" não deve ser vazio!',
//             'any.required': 'O campo "email" é obrigatório!'
//         }),
//         address: Joi.object().required().keys({
//             logradouro: Joi.string().empty().required().messages({
//                 'string.base': 'O campo "logradouro" deve ser do tipo texto!',
//                 'string.empty': 'O campo "logradouro" não deve ser vazio!',
//                 'any.required': 'O campo "logradouro" é obrigatório!'
//             }),
//             numero: Joi.string().empty().required().messages({
//                 'string.base': 'O campo "número" deve ser do tipo texto!',
//                 'string.empty': 'O campo "número" não deve ser vazio!',
//                 'any.required': 'O campo "número" é obrigatório!'
//             }),
//             complemento: Joi.string().messages({
//                 'string.base': 'O campo "complemento" deve ser do tipo texto!',
//             }),
//             bairro: Joi.string().empty().required().messages({
//                 'string.base': 'O campo "bairro" deve ser do tipo texto!',
//                 'string.empty': 'O campo "bairro" não deve ser vazio!',
//                 'any.required': 'O campo "bairro" é obrigatório!'
//             }),
//             cep: Joi.string().empty().required().messages({
//                 'string.base': 'O campo "cep" deve ser do tipo texto!',
//                 'string.empty': 'O campo "cep" não deve ser vazio!',
//                 'any.required': 'O campo "cep" é obrigatório!',
//             }),
//             cidade: Joi.string().empty().required().messages({
//                 'string.base': 'O campo "cidade" deve ser do tipo texto!',
//                 'string.empty': 'O campo "cidade" não deve ser vazio!',
//                 'any.required': 'O campo "cidade" é obrigatório!'
//             }),
//             uf: Joi.string().uppercase().empty().required().messages({
//                 'string.base': 'O campo "uf" deve ser do tipo texto!',
//                 'string.empty': 'O campo "uf" não deve ser vazio!',
//                 'any.required': 'O campo "uf" é obrigatório!',
//             }),
//         })
//     });

//     const result = schema.validate(data);
//     return result;
// };

//export {
    //validates
    // validateParams,
    // validateEmail,
    // validateEmailNewName,
    // validateEmailAddress,
    // validateUf,
//};
export default validates;