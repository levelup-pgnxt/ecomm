import { getAccounts } from './createUserAccount.js'

export function searchUserAccountByEmailUseCase(email) {

   return getAccounts().find(account => account.email == email);

}