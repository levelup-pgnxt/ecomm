import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
    {
        id: false,
        street: {type: String, required: true},
        number: {type: String, required: true},
        complement: {type: String},
        district: {type: String},
        cep: {
            type: Number,
            validate: {
                validator: (cpf) => {
                    return /^\d{8}$/.test(cpf)
                },
                message: 'O CEP deve conter apenas números e precisa obrigatoriamente ter 8 números.'
            }
            },
        city: {type: String, required: true},
        uf: {
            type: String,
            required: true,
            validate: {
                validator: (uf) => {
                    return /^(AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO)$/.test(uf)
                },
                message: 'UF inválida.'
            }
        }
    }
)

const accountSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        email: {
            type: String,
            required: true,
            validate: {
                validator: (email) => {
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
                },
                message: 'O e-mail precisa ser válido.'
            }
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: (senha) => {
                    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%**#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(senha)
                },
                message: 'A senha deve conter mais que 8 caracteres e deve possuir letras, números e caracteres especiais.'
            }
        },
        cpf: {
            type: Number,
            validate: {
                validator: (cpf) => {
                    return /^\d{11}$/.test(cpf)
                },
                message: 'O CPF deve conter apenas dígitos númericos e precisa obrigatoriamente ter 11 dígitos.'
            }
        },
        phone: {
            type: Number,
            validate: {
                validator: (telefone) => {
                    return /^\d{10, 13}$/.test(telefone)
                },
                message: 'O telefone deve ter de 10 à 13 digitos apenas numéricos.'
            }
        },
        address: {type: addressSchema, required: true}
    }
)

const accounts = mongoose.model('accounts', accountSchema);

export default accounts;