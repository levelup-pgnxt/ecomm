import { accounts } from "./createUserAccount.js";

export function searchUserAccountByEmailCase(email) {
  const user = accounts.find((account) => account.email === email);
  if (!user) {
    return `Esse usuário não foi encontrado`;
  }

  return user;
}
