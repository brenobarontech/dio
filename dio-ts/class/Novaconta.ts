import { DioAccount } from "./DioAccount"


export class NovaConta extends DioAccount {
  
  
    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
      
    }

    AbrirConta = (valor:number,novaconta:boolean) =>{
        return  this.deposit(valor,novaconta) 
    }
  }