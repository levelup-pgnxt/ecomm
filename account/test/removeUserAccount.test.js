import { accounts } from '../src/use-case/accounts.js'
import {removeUserUseCase} from '../src/use-case/removeUserAccount.js'

// 'email'
removeUserUseCase()

console.log(accounts)