import {
  createUserUseCase,
  accounts,
} from "../src/use-case/createUserAccount.js";

const newUser1 = createUserUseCase("layssa", "layssa@email.com", "123ss34");
const newUser2 = createUserUseCase("roberto", "roberto@email.com", "1237534");

console.log(newUser1);
console.log(newUser2);

console.log(accounts);
