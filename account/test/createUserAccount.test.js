import {
  createUserUseCase,
  accounts,
} from "../src/use-case/createUserAccount.js";

createUserUseCase("gabi", "gabi@email.com", "12334");
createUserUseCase("layssa", "layssa@email.com", "123ss34");
createUserUseCase("roberto", "roberto@email.com", "1237534");

console.log(accounts);
