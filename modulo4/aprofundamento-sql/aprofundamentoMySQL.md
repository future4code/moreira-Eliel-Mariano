USE database-moreira-21712336-eliel-mariano;

SELECT * FROM Actor;
SET SQL_SAFE_UPDATES = 0;

#ex 1

#a: Altera a estrutura da tabela deletando a coluna desejada

#b: altera estrutura da tabela alterando o nome da coluna gênero para sexo e com até 6 caracteres

#c: altera estrutura da tabela mantendo o nome da coluna genero e com até 255 caracteres

#d:
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

#ex 2

#a
UPDATE Actor SET
    name="Cleo Pires",
    birth_date="1985-05-06"
WHERE id="003";

#b
UPDATE Actor SET
    name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor SET
    name = "Juliana Paes",
WHERE name = "JULIANA PAES";

#c
UPDATE Actor SET
    name = "Julião Paes",
    salary = 100000,
    birth_date = "2001-03-04",
    gender = "male"
WHERE id = 005;

#d - ele aceitou o update mas não o exibiu na tabela.
UPDATE Actor SET
    name="Cleo Pires",
    birth_date="1985-05-06"
WHERE id="010";

#ex 3

#a
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

#b
DELETE FROM Actor
WHERE gender ="male" AND salary > 1000000;

#ex 4

#a
SELECT MAX(salary) FROM Actor;

#b
SELECT MIN(salary) FROM Actor
WHERE gender = "female";

#c
SELECT COUNT(*) FROM Actor
WHERE gender = "female";

#d
SELECT SUM(salary) FROM Actor;

#ex 5
#a faz uma contagem de toda a tabela e agrupa os gêneros iguais
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

#b
SELECT id, name FROM Actor
ORDER BY name DESC;

#c
SELECT * FROM Actor
ORDER BY salary ASC;

#d
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

#e
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

#ex 6
#a
ALTER TABLE Filmes
ADD playing_limit_date DATE;

#b
ALTER TABLE Filmes
CHANGE avaliação avaliação FLOAT;

#C
UPDATE Filmes 
SET playing_limit_date = "2006-05-04"
WHERE id = 004;

#d
DELETE FROM Filmes
WHERE id = 003;

UPDATE Filmes #Atualizou sem erro, mas a linha deletada continua deletada.
SET sinopse = "testando ex 6 d"
WHERE id = 003;

SET SQL_SAFE_UPDATES = 1;