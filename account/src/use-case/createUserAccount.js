let accounts = [];

function createUserUseCase(name, email, password) {
  let userId = accounts.length + 1;

  accounts.push({
    id: userId,
    name: name + ` ` + userId,
    email: email,
    password: password,
    createdDate: new Date().toLocaleString(),
  });
  return accounts;
}

export { createUserUseCase, accounts };
