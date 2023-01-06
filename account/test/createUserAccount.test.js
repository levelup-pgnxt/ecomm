import { createUserUseCase } from '../src/use-case/createUserAccount.js';

const josue = createUserUseCase('Josué Lima', 'josuelima@gmail.com', 'senhaDoJosue');

const alexandre = createUserUseCase('Alexandre Aquiles', 'alexandre@gmail.com', 'senhaDoAlexandre');


// console.log(josue);
// console.log(alexandre);