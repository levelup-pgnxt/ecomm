import { createUserAdressUseCase } from "../../src/use-case/createUserAddress.js";
import { searchUserAccountByEmailUseCase } from "../../src/use-case/searchUserAccountByEmail.js";

console.log(searchUserAccountByEmailUseCase("teste@teste.com"))
createUserAdressUseCase("teste@teste.com", "Rua Teste", "123", "Apto 1, bloco B", "Jd. Teste","04000-000", "Sao Paulo", "SP")