import { accounts } from './mockAccounts.js';
import { searchUserAccountByEmailUseCase } from './searchUserAccountByEmail.js';

export function changeUserNameUseCase(email,newName) {
  const user = searchUserAccountByEmailUseCase(email);

  if(!user){
    return false
  } 

  const userIndex = accounts.indexOf(user);
  accounts[userIndex].name = newName;

  return true
};
