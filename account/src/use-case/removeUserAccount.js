import { createUserUseCase, accounts } from "../use-case/createUserAccount.js";

function removeUserUseCase(emailFind) {
  accounts.splice(accounts.findIndex((account) => account.email === emailFind),1)
  return accounts
}



export { removeUserUseCase };