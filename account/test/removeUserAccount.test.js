import { accounts } from "../src/use-case/createUserAccount.js";
import { removeUserUseCase } from "../src/use-case/removeUserAccount.js";

console.log(accounts);

const removeUser1 = removeUserUseCase("user@email.com");
console.log(removeUser1);

const removeUser2 = removeUserUseCase("usuario@email.com");
console.log(removeUser2);
console.log(accounts);

const removeUser3 = removeUserUseCase("gabi@email.com");
console.log(removeUser3);
console.log(accounts);
