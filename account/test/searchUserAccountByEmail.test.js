import{searchUserAccountByEmailUseCase} from "../src/use-case/searchUserAccountByEmail.js"
import { users } from "./createUserAccount.test.js"

let emails=[];
//let index=0;
//for para povoar o array emails com os emails que vem de users (da função createuser)
for (let i=0; i<users.length; i++){
    emails [i] =  users[i].email;
}

let teste = "karina@company.com";


let x = searchUserAccountByEmailUseCase(emails, teste);

export {x,emails};



