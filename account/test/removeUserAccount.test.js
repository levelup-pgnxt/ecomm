import { createUserUseCase } from '../src/use-case/createUserAccount.js';
import { searchUserAccountByEmailUseCase } from '../src/use-case/searchUserAccountByEmail.js'
import { removeUserAccountUseCase } from '../src/use-case/removeUserAccount.js'

createUserUseCase('Alexandre', 'alexandre@gmail.com', 'senhaDoAlexandre')

const removeu = removeUserAccountUseCase('alexandre@gmail.com')
console.log(removeu)

const encontrado = searchUserAccountByEmailUseCase('alexandre@gmail.com')
console.log(encontrado)

const removeuNaoExistente = removeUserAccountUseCase('naoexiste@gmail.com')
console.log(removeuNaoExistente)