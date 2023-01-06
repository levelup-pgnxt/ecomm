const accounts = [];

// console.log('fora da função createUserUseCase')

export function createUserUseCase(nome, email, senha) {

  // console.log('dentro da função createUserUseCase')

  const userId = accounts.length + 1;

  const user = {
    id: userId,
    name: nome,
    email: email,
    password: senha,
    createdDate: new Date().toISOString().substring(0,10)
  };

  accounts.push(user);

  return user;

}

export function getAccounts() {
  return accounts;
}