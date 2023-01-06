import {allAccounts} from "./createUserAccount.js";

function removeUserUseCase (email) {
    const ind = allAccounts.findIndex((account) => account["email"].includes(email));
    allAccounts.splice(ind, 1);

    if (ind === -1) {
        return false;
    } else {
        return true;
    }
}

export { removeUserUseCase };