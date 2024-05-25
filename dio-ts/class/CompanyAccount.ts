import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  
   getLoan = (emprestimo:number,conta : boolean): void => {
    if(conta == this.getValidaStatus()) 
    {
        console.log('Valor de emprestimo: R$ ' + emprestimo.toFixed(2).replace('.',','))
        this.deposit(emprestimo)


    }else{
      console.log('Não é uma conta válida')
    }
  
  }

  

}
