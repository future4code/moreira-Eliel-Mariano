class UserAccount {
    constructor(cpf, name, age, transactions) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }
    getCpf() {
        return this.cpf;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getBalance() {
        return this.balance;
    }
    getTransactions() {
        return this.transactions;
    }
}
class Transaction {
    constructor(description, value, date) {
        this.description = description;
        this.value = value;
        this.date = date;
    }
    getDescription() {
        return this.description;
    }
    getValue() {
        return this.value;
    }
    getDate() {
        return this.date;
    }
}
const transacao = new Transaction("compra", 200, "25-01-2022");
const dados = new UserAccount("12345678912", "eliel", 38, transacao);
console.log(dados);
class Bank {
    constructor(accounts) {
        this.accounts = accounts;
    }
}
const detalhes = new Bank([{ cpf: "1681", name: "eliel", age: 18, transactions: { description: 'compra', value: 200, date: '25-01-2022' } }]);
console.log(detalhes);
//# sourceMappingURL=index.js.map