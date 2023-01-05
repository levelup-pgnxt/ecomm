import {createUserUseCase} from "./../src/use-case/createUserAccount.js";
import { addUserAddressUseCase } from "../src/use-case/addUserAdress.js";
import { listUfsUseCase } from "../src/use-case/listUfs.js";

const retro1 = createUserUseCase("Josué Lima", "josuelima@email.com", "senhaDoJosue");
const indAddress1 = addUserAddressUseCase ("Josué Lima", "Av boa viagem", "1200", "apt 1302", "Boa viagem", "51020-010", "Recife", "PE");
const retro2 = createUserUseCase("Pedro Lima", "pedrolima@email.com", "senhaDoPedro");
const indAddress2 = addUserAddressUseCase ("Pedro Lima", "Av joao pessoa", "860", "apt 701", "Manaira", "53012-020", "João Pessoa", "PB");
const retro3 = createUserUseCase("Paulo Lima", "paulolima@email.com", "senhaDoPaulo");
const indAddress3 = addUserAddressUseCase ("Paulo Lima", "Av florianopolis", "972", "apt 303", "Centro", "98020-030", "Florianopólis", "SC");
const retro4 = createUserUseCase("João Lima", "joaolima@email.com", "senhaDoJoao");
const indAddress4 = addUserAddressUseCase ("João Lima", "Av Olinda", "581", "apt 217", "Alto da Nação", "15920-153", "Olinda", "PE");
const retro5 = createUserUseCase("Cícero Lima", "cicerolima@email.com", "senhaDoCicero");
const indAddress5 = addUserAddressUseCase ("Cícero Lima", "Av Belo Horizonte", "7892", "apt 304", "Belvedere", "43162-101", "Belo Horizonte", "MG");

const resp = listUfsUseCase('PE');
console.log(resp);


