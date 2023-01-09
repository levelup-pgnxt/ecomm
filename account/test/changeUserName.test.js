import { accounts } from '../src/use-case/accounts.js'
import {changeUserNameUseCase} from '../src/use-case/changeUserName.js'

// 'email', 'newName'
changeUserNameUseCase()

console.log(accounts)