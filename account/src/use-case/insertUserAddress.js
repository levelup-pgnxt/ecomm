import { accounts } from './mockAccounts.js';
import { searchUserAccountByEmailCase } from './searchUserAccountByEmail.js';

export function insertUserAddressUseCase(email, payload) {
  const user = searchUserAccountByEmailCase(email);

  if (!user) {
    return 'Usuário não encontrado'
  }

  const userIndex = accounts.indexOf(user);
  accounts[userIndex].endereco = payload;

  return user;
};
