import {allAccounts} from "./../use-case/createUserAccount.js";

function addUserAddressUseCase (name, logradouro, numero, complemento, bairro, cep, cidade, uf) {
    const ind = allAccounts.findIndex((account) => account["name"].includes(name));
    if (ind === -1) {
        return -1;
    }
    allAccounts[ind].address = { logradouro, numero, complemento, bairro, cep, cidade, uf };
    return ind;
    
}

export { addUserAddressUseCase }