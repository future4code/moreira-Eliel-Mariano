//  ********************* HERANÇA


class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
    return `Olá, sou o ${this.name}. Bom dia!`;
  }
}

const usuario = new User("1966981", "sknrehk@kjdchdus", "eliel", "bhsgtnb57ny");
//console.log(usuario)

//2
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const cliente = new Customer(
  "1966981",
  "sknrehk@kjdchdus",
  "eliel",
  "bhsgtnb57ny",
  "1234567851"
);

//ex 3
//console.log(cliente.getId());
cliente.getEmail();
cliente.getName();
cliente.getCreditCard();
cliente.purchaseTotal;


//ex 4
cliente.introduceYourself();
//console.log(cliente.introduceYourself());

// ********************** POLIMORFISMO

//EX 1
interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  calculateBill(): number;
}

const contaCliente: Client = {
    name: "eliel",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 6;
    }
}


/* console.log(contaCliente.name)
console.log(contaCliente.registrationNumber)
console.log(contaCliente.consumedEnergy)
console.log(contaCliente.calculateBill()) */

//ex 2
abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
        return this.cep;
    }
}

//const teste = new Place("36050330")


//ex 3

class Residence extends Place {
    constructor(
      protected residentsQuantity: number, cep: string) {
      super(cep);
    }

    public getrRsidentsQuantity():number{
        return this.residentsQuantity
    }
}

const residencia = new Residence(5, "68586")
residencia.getCep()
//console.log(residencia.getCep())


class Commerce extends Place {
    constructor(
      protected floorsQuantity: number, cep: string) {
      super(cep);
    }

    public getFloorsQuantity():number{
        return this.floorsQuantity
    }
}

const comercio = new Commerce(4, "6468146")
comercio.getCep()
//console.log(comercio.getCep())


class Industry extends Place {
    constructor(
      protected machinesQuantity: number,cep: string) {
      super(cep);
    }

    public getMachinesQuantity():number{
        return this.machinesQuantity
    }
  }

const industria = new Industry(1500, "514981476")
industria.getCep()
//console.log(industria.getCep())


//ex 4
class ResidentialClient extends Residence implements Client {
    constructor (
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string,
        private cpf:string,
        ){
        super(residentsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
      }

    public getCpf():string{
        return this.cpf
    }
}

//5
class CommercialClient extends Commerce implements Client {
    constructor (
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string,
        private cnpj:string,
        ){
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
      }

    public getCnpj():string{
        return this.cnpj
    }
}

//6

class IndustrialClient extends Industry implements Client {
    constructor (
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        machinesQuantity: number,
        cep: string,
        private register:string,
        ){
        super(machinesQuantity, cep)
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.45) + (this.machinesQuantity * 100)
      }

    public getRegister():string{
        return this.register
    }
}
