#USE database-moreira-21712336-eliel-mariano;
# ex 1
CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

#a: DATE representa uma data, NOT NULL que o valor não pode ser nulo, VARCHAR o numero máximo de caracteres.

SHOW TABLES;
SHOW DATABASES;

#b: esses comandos nos mostram as tabelas do banco e todo conteúdo do schemas, respectivamente.

DESCRIBE Actor;

#c: descreve os campos da tabela.

# ex 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

#b: erro de duplicidade da key primary.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002", 
"Cleo Pires",
1200000,
"1984-08-23",
"female"
);

#c: o número de colunas declaradas não conferem com as atribuídas.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
); 

#d: o campo name não pode ser igual ao default quel é null.
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Ary Toledo",
  400000,
  "1949-04-18", 
  "male"
);

# e: a data foi passada como número e o código processou a operação matemática, acusando erro na data.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


#f:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Mônica",
  20000,
  "1978-05-07", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Eliel",
  0,
  "1984-05-06", 
  "male"
);

#3
SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, name FROM Actor WHERE gender = "male";

#a
SELECT * FROM Actor WHERE gender = "female";
#b
SELECT name, salary FROM Actor WHERE name = "Tony Ramos";
#c
SELECT * FROM Actor WHERE gender = "invalid";
#retornou null porque não há ninguém com esse gênero na tabela.
#d
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
#e
SELECT id, name from Actor WHERE id = "002";
#o parâmetro nome nao existe, o correto é name.

#4
#a: retorna todos os dados, onde nome começa com A ou J e o salário é maior que 300000.

#b:
SELECT * FROM Actor
WHERE name  NOT LIKE "A%" AND salary > 350000;

#c
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

#d
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%")
AND (salary BETWEEN 300000 AND 900000);

# ex5
CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL, #permite um número maior de caracteres qu o varchar
data_de_lançamento DATE NOT NULL,
avaliação  FLOAT NOT NULL
);

INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
  "2006-01-06", 
  8
);

INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
  "2012-12-27", 
  10
);

INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "1984-05-04", 
  8
);

INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "004", 
  "Auto da compadecida",
  "num sei, só sei que foi assim.",
  "1984-05-04", 
  1000
);

DESCRIBE Filmes;

SELECT * FROM Filmes;

#6
SELECT id, name, avaliação from Filmes WHERE id = "004";

SELECT * from Filmes WHERE name = "Auto da compadecida";

SELECT id, name, sinopse from Filmes WHERE avaliação >= 7;

#7
SELECT name from Filmes WHERE name LIKE "%vida%";