//  ********************* HERANÇA

//ex 1
//a: não seria possível porque é um atributo privado e não temos um método público para isso.

//b: foi impressa apenas uma vez.

//ex 2
//a: foi impressa apenas uma vezes.
//b: foi impressa 2 vezes porque a sintaxe "super" chama o construtor pai, que contém a mensagem, e imprime novamente.


//ex 3
//a: não seria possível porque não existe um método público que conceda acesso ao atributo password.


// ********************** POLIMORFISMO

//ex 1
//a: foi possível imprimir todas porque são todas públicas.

//ex 2
//a: TS diz que não é possível criar uma instância de classe abstrata

//ex 4
//a: possui todas as classes e métodos da interface, as propriedades do pai e cpf, com sua getCpf.


//ex 5
//a e b: basicamente iguais, alterando o valor da tarifa e a classe pai.

//ex 6
//a: deve ser filha da classe especificamente criada para ela, Industry, porque representam suas características.
//b: implementa a interface para registro e calculo do valor da conta, Client, que é comum a todos.
//c: todas as propriedades são basicamente estáveis, quase nunca havendo mudanças.
