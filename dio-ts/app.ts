import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NovaConta } from './class/Novaconta'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(30)
peopleAccount.withdraw(40)
peopleAccount.withdraw(5)
peopleAccount.deposit(30)
peopleAccount.withdraw(2)

console.log('---------------------')

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

companyAccount.getLoan(100,true)
companyAccount.getLoan(200,true)
companyAccount.withdraw(150)

console.log('---------------------')
const nc: NovaConta = new NovaConta('Breno', 1032)

nc.AbrirConta(100,true)
