let accounts = [];
let systemDate = new Date();

function createUserUseCase(name, email, password) {
  let userId = accounts.length + 1;

  accounts.push({
    id: userId,
    name: name + ` ` + userId,
    email: email,
    password: password,
    createdDate: systemDate.toLocaleString(),
  });
  return accounts;
}

export { createUserUseCase, accounts };
