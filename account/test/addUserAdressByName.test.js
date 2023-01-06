import {allAccounts} from "./../src/use-case/createUserAccount.js";
import { createUserUseCase } from "./../src/use-case/createUserAccount.js";
import { addUserAddressUseCase } from "../src/use-case/addUserAdress.js";

//addUserAdressUseCase (name, logradouro, numero, complemento, bairro, cep, cidade, uf)
const retro = createUserUseCase("Josué Lima", "josuelima@email.com", "senhaDoJosue");
const indAddress = addUserAddressUseCase ("Josué Lima", "Av boa viagem", "1200", "apt 1302", "Boa viagem", "51020-010", "Recife", "PE");
console.log(allAccounts[indAddress]["address"]);
