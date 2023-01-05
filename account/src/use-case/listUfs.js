import {allAccounts} from "./createUserAccount.js";


function listUfsUseCase (estado) {

    const accountInState = allAccounts.filter((account) => {
        if (account["address"]["uf"].includes(estado)) {
            return true;
        } else {
            return false;
        }
    });
    
    return accountInState;
}

export { listUfsUseCase }