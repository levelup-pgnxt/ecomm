import {accounts} from './accounts.js'

export function searchUserAccountByUfUseCase(uf){
    const userAccountsWithAddress = accounts.filter(user => (user.hasOwnProperty('address')));
    const userAccountsByUf = userAccountsWithAddress.filter(userAccountsWithAddress => userAccountsWithAddress.address.uf.toLowerCase() === uf)

    return userAccountsByUf
}