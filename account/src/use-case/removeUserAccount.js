import { createUserUseCase, accounts } from "../use-case/createUserAccount.js";

function removeUserUseCase(emailFind) {
  let newArray = accounts.filter((account) => account.email !== emailFind);
  accounts.length = 0;
  return accounts.push(newArray);
}

export { removeUserUseCase };