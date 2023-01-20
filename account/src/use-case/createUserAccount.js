export function createUserUseCase(name, email, password) {
  const newUser = {
    id: accounts.length + 1,
    name,
    email,
    password,
    createdDate: new Date().toISOString().substring(0, 10),
  };

  accounts.push(newUser);

  return newUser;
}
