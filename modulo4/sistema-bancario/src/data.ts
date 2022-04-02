type Transations = {}; //???

export type User = {
  name: string;
  cpf: number;
  birthYear: number;
  operations: number[];
  saldo: number
}

export let users: User[] = [
  {
    name: "eliel",
    cpf: 12345678998,
    birthYear: 1984,
    operations: [100, 200, 300, -400],
    saldo: 0
  },
  /* {
    name: "eliel2",
    cpf: 12345678997,
    birthYear: 1984,
    operations: [100, 200, 300, -400],
  },
  {
    name: "jorge",
    cpf: 12345678998,
    birthYear: 1984,
    operations: [100, 200, 300, -400],
  },
  {
    name: "bel",
    cpf: 12345678998,
    birthYear: 1984,
    operations: [100, 200, 300, -400],
  }, */
];
