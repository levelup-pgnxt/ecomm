import {allAccounts} from "./../use-case/createUserAccount.js";

function changeUserNameUseCase (email, newName) {
    const ind = allAccounts.findIndex((account) => account["email"].includes(email));
    
    if (allAccounts[ind]["name"].includes(newName)) {
        return false;
    }
    allAccounts[ind]["name"] = newName;
    return true;
}

export {changeUserNameUseCase};