export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositado:number,novaconta?:boolean): void => {
    
    if(this.validateStatus())
    {

      if(novaconta)
      {
        console.log('valor depositado: R$ ' + depositado.toFixed(2).replace('.',','))
        console.log('PArabens por abrir na nossa conta')
        this.balance = depositado + 10 


      }else
      {
        console.log('Voce depositou: ' + depositado.toFixed(2).replace('.',','))
        this.balance = this.balance + depositado 
      }

    

    }

    console.log('Saldo atual: ' + this.balance.toFixed(2).replace('.',','))
   
  }

  withdraw = (sacar:number): void => {
    if(this.validateStatus() && sacar <= this.balance){
      this.balance = this.balance - sacar 
      console.log('Voce sacou: ' + sacar.toFixed(2).replace('.',','))
      console.log('Saldo atual: ' + this.balance.toFixed(2).replace('.',','))
    
    }else{
      console.log(sacar.toFixed(2).replace('.',',') + '  é maior que o saldo atual ' + this.balance.toFixed(2).replace('.',','))
    }
   
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getValidaStatus = () : boolean =>{
    return this.validateStatus()
    
  }
}
