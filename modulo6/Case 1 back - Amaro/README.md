## Desafio back-end AMARO: Rodada-case-semana-1

### Requisitos executados:
Endpoint para cadastrar produto via arquivo "products.json" ou através de inserção de um produto por vez através de um body passado na requisição;
Endpoint para buscar produto por id, por nome ou por tags, visando arquitetura limpa, com inversão de dependências;
Testes unitários mockados.

### Documentação do Postman
https://documenter.getpostman.com/view/19294761/UyxnF5My

### Link do Heroku
https://rodada-case-semana-1-amaro.herokuapp.com/

### Objetivos do projeto:
Trata-se de um projeto backend cujo objetivo é realizar cadastro de produtos no banco de dados e também suas respectivas buscas através de um dado específico (id, name ou tag).

### Tecnologias utilizadas:
TypeScript, NodeJs, Express, Postman, Knex, MySQL e Jest

### Acessando o projeto:
1 - Após baixar, instale o projeto: npm install;
2 - Criar as tabelas executando o script "migration";
3 - Alocar um arquivo "products.json" no diretório "src/business", com a listagem dos produtos a serem cadastrados, no seguinte modelo:
![image](https://user-images.githubusercontent.com/94701976/169651744-0865e9ce-7278-4049-a446-59275c8c3d23.png)
Então, execute o endpoint de criação de produtos no Postman.
4 - Outra opção seria executar o endpoint de criação no Postman informando um body no formato raw json, no seguinte modelo:
![image](https://user-images.githubusercontent.com/94701976/169651897-d54bd062-98e0-415e-b896-3db8ca127236.png)
