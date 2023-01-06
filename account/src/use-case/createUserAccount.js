export const accounts = [
  {
    id: 1,
    name: "usuario",
    email: "usuario@email.com",
    password: "54321",
    createdDate: "2023-01-06",
  },
  {
    id: 2,
    name: "gabi",
    email: "gabi@email.com",
    password: "12334",
    createdDate: "2023-01-06",
  },
];

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
