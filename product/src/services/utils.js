import Joi from 'joi';
import runSchema from './validator.js';

const limit = 3;

const validates = {
    paramsNewCategory: runSchema(Joi.object().keys({
        nome: Joi.string().min(limit).empty().required().pattern(/^[A-Za-z]\w.+/).messages({
            'string.base': 'O campo "nome" deve ser do tipo texto!',
            'string.empty': 'O campo "nome" não deve ser vazio!',
            'string.min': `'O campo "nome" deve ter no mínimo ${limit} caracteres!'`,
            'string.pattern.base': 'O campo "nome" deve iniciar por uma letra!',
            'any.required': 'O campo "nome" é obrigatório!'
        }),
    }))
};

// const validateParams = (data) => {
//     const limit = 3;
//     const schema = Joi.object().keys({
//         nome: Joi.string().pattern(/^[a-z]\w.+/).min(limit).empty().required().messages({
//             'string.base': 'O campo "nome" deve ser do tipo texto!',
//             'string.pattern': 'O campo "nome" deve iniciar por uma letra!',
//             'string.empty': 'O campo "nome" não deve ser vazio!',
//             'string.min': `'O campo "nome" deve ter no mínimo ${limit} caracteres!'`,
//             'any.required': 'O campo "nome" é obrigatório!'
//         }),
//     });
 
//     const { error, value } = schema.validate(data);

//     if (error) {
//         console.log(error);
//         let msg = error.details[0].message;
//         if (msg.substr(1, 1) === '[') {
//           msg = msg.replace(msg.substr(1, 4), '');
//         }
//         error.message = msg;
//         error.type = error.details[0].type;
//         throw error;
//     }
    
//     return value;
// };

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