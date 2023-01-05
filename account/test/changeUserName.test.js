import {createUserUseCase} from "./../src/use-case/createUserAccount.js";
import {changeUserNameUseCase} from "./../src/use-case/changeUserName.js";

const retro = createUserUseCase("Josué Lima", "josuelima@email.com", "senhaDoJosue");
const change = changeUserNameUseCase("josuelima@email.com", "Josué Lima");

console.log(`The first change is ${change}`);
const change1 = changeUserNameUseCase("josuelima@email.com", "Josué Filho");
console.log(`The second one is ${change1}`);