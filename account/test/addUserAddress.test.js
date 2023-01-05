import { accounts } from '../src/use-case/accounts.js'
import {createUserAddressUseCase, insertUserAddressUseCase } from '../src/use-case/addUserAddress.js'

// 'logradouro', 'numero', 'complemento', 'bairro', 'cep', 'cidade', 'uf'
const newAddress = createUserAddressUseCase()

// accounts, 'email', newAddress
insertUserAddressUseCase()

console.log(accounts)