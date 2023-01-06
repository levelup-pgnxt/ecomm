import { createUserUseCase } from '../src/use-case/createUserAccount.js';
import { searchUserAccountByEmailUseCase } from '../src/use-case/searchUserAccountByEmail.js'

createUserUseCase('Alexandre Aquiles', 'alexandre@gmail.com', 'senhaDoAlexandre');

const encontrado = searchUserAccountByEmailUseCase('alexandre@gmail.com')
console.log(encontrado)

const naoExiste = searchUserAccountByEmailUseCase('naoexiste@gmail.com')
console.log(naoExiste)
if(typeof naoExiste === 'undefined') {
    console.log('Usuário não encontrado');
}