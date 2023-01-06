import { createUserUseCase } from "./../src/use-case/createUserAccount.js";
import { searchUserAccountByEmailUseCase } from "./../src/use-case/searchUserAccountByEmail.js";
import { removeUserUseCase } from "./../src/use-case/removeUserAccount.js";

const retro = createUserUseCase("Josué Lima", "josuelima@email.com", "senhaDoJosue");
const removed = removeUserUseCase("josuelima@email.com");
const answer = searchUserAccountByEmailUseCase("josuelima@email.com");

if (typeof answer === "undefined" & removed === true) {
    console.log(`Email ${retro.email} removido com sucesso`);
} else {
    console.log(`Email ${retro.email} não foi removido`);
}