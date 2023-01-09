import { accounts } from '../src/use-case/accounts.js'
import {createUserUseCase} from '../src/use-case/createUserAccount.js'

// 'name', 'email', 'password'
createUserUseCase()

console.log(accounts)