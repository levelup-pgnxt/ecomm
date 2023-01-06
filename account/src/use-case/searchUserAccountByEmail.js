import {allAccounts} from "./../use-case/createUserAccount.js"

function searchUserAccountByEmailUseCase (email) {
    return allAccounts.find((account) => account["email"].includes(email));
}

export { searchUserAccountByEmailUseCase };