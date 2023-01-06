// importa e testa no console.log .
import { searchUserAccountByEmailUseCase } from "./../src/use-case/searchUserAccountByEmail.js";
import {createUserUseCase} from "./../src/use-case/createUserAccount.js";

const retro = createUserUseCase("Josué Lima", "josuelima@email.com", "senhaDoJosue");
const search = searchUserAccountByEmailUseCase("josuelima@email.com");

console.log(search);