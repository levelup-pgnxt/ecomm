const allAccounts = [];

function createUserUseCase(name, email, password) {
    const userObject = {
        id: allAccounts.length + 1,
        name: name,
        email: email,
        password: password,
        createdDate: JSON.stringify(new Date()).substring(1, 11)
    };

    allAccounts.push(userObject);
    return userObject;
}

export {createUserUseCase, allAccounts};
