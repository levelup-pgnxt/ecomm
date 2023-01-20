import { accounts } from './mockAccounts.js';
import { searchUserAccountByEmailCase } from './searchUserAccountByEmail.js';

export function removeUserUseCase(email) {
  const user = searchUserAccountByEmailCase(email);

  if (typeof user === 'object') {
    accounts.splice(accounts.indexOf(user), 1);

    return true;
  }

  return false;
}
