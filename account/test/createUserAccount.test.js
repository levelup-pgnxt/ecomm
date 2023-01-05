// importa a função criada no createUserAccount.js
// executa passando os parametros necessarios e 
// usa o retorno da funcao no console.log

import {createUserUseCase} from "./../src/use-case/createUserAccount.js";

const retro = createUserUseCase("Josué Lima", "josuelima@email.com", "senhaDoJosue");
console.log(retro);