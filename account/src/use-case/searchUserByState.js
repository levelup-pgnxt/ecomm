import { accountsWithAddress } from './mockAccounts.js';

export function searchUserAccountByStateCase(uf) {
  const user = accountsWithAddress.filter((account) => account.endereco.uf === uf);

  return user;
};
