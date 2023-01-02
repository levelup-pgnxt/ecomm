let accounts=[];
let systemDate = new Date();

//

function createUserUseCase (name, email, password) {
    let userId = accounts.length+1;

    accounts[userId-1] = {
        id: userId,
        name: name,
        email: email,
        password: password,
        createdDate: systemDate.toLocaleString(),
        
     }
    return accounts;
}

export { createUserUseCase, accounts };


