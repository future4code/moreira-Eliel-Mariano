// exercício 1


//b:
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(cpf: string, name: string, age: number, transactions:any) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = transactions
    }

    public getCpf(){
        return this.cpf
    }

    public getName(){
        return this.name
    }

    public getAge(){
        return this.age
    }

    public getBalance(){
        return this.balance
    }

    public getTransactions(){
        return this.transactions
    }

  }

  //const dados = new UserAccount("12345678912", "eliel", 38, transacao)
  //console.log (dados.getName())
  

  //exercício 2
  class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description:string, value:number, date:string){
        this.description = description
        this.value = value
        this.date = date
    }

    public getDescription(){
        return this.description
    }

    public getValue(){
        return this.value
    }

    public getDate(){
        return this.date
    }

  }


  const transacao = new Transaction("compra", 200, "25-01-2022")

  const dados = new UserAccount("12345678912", "eliel", 38, transacao)

  //console.log(transacao.getDescription())

  console.log (dados)

  //exercício 3
  
  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts
    }

  }

  const detalhes = new Bank([{cpf: "1681", name:"eliel", age: 18, transactions: {description:"compra" , value:100, date: "12-25-45"}}])

  //console.log (detalhes)