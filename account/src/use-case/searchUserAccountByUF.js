import { createUserUseCase, accounts } from "./createUserAccount.js";
import { createAdditionalDataUseCase } from "./createAdditionalData.js"

function searchUserAccountByUFUseCase(UFFind) {
  const searchUF = accounts.filter((account) => account.UF === UFFind) 
  if (searchUF != "") {
    return searchUF;
  }
  if (searchUF == "") {
    return ("Não encontrado!");
  }
}

createUserUseCase(`Cairo`,`nome1@dominio.com`, 123456);
createUserUseCase(`Carol`,`nome2@dominio.com`, 123456);
createUserUseCase(`Karina`,`nome3@dominio.com`, 123456);
createUserUseCase(`Gabriel`,`nome4@dominio.com`, 123456);


createAdditionalDataUseCase(`nome1@dominio.com`, "rua", 210, "perto", "aqui", 39000, "Montes Claros", "MG");
createAdditionalDataUseCase(`nome3@dominio.com`, "rua", 230, "perto", "aqui", 39999, "Ouro Preto", "MG");



console.log(searchUserAccountByUFUseCase("MG"));

export { searchUserAccountByUFUseCase };
