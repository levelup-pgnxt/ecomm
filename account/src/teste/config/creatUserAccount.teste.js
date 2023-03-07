import {
  createUserUseCase,
  listaUsuariosTeste,
} from '../../use-case/createUserAccount.js';

createUserUseCase('Isac Queiroz', 'isac@gmail.com', Math.random());
createUserUseCase('Isac Queiroz', 'testeProcura@gmail.com', Math.random());

export {
  listaUsuariosTeste,
};
