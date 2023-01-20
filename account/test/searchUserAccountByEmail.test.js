import { searchUserAccountByEmailCase } from "../src/use-case/searchUserAccountByEmail.js";

const user1 = searchUserAccountByEmailCase("gabi@email.com");
const user2 = searchUserAccountByEmailCase("user@email.com");

console.log(user1);
console.log(user2);
