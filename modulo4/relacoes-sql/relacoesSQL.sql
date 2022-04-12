#1
#a: chave estrangeira é referenciada a uma primary key, exatamente do mesmo tipo, de outra tabela.

#b:
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY(movie_id) REFERENCES Filmes(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
    "004",
    "muito bom!",
    10,
    "003"
);


#c: ele não consegue atualizar porque não existe uma chave estrangeira válida.

#d:
ALTER TABLE Filmes DROP COLUMN avaliação;

#e: falhou porque não pode deletar se ela for vinculada a uma chave estrangeira
DELETE FROM Filmes WHERE id = "002";

#ex 2:
#a: ela possui 2 colunas, sendo a primeira referenciada com os id dos filmes e a segunda referenciada com os id dos atores.

#b:
CREATE TABLE MovieCast (
    movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES
    ("005","005")
;

#c: ele não consegue porque não existe uma chave estrangeira válida.
#d: falhou porque não pode deletar se ela for vinculada a uma chave estrangeira
DELETE FROM Actor WHERE id = "001";

#ex 3
#a: Ele é utilizado para introduzir as condições impostas ao retorno da query
#b:
SELECT name, Filmes.id, rate FROM Filmes
JOIN Rating
ON Filmes.id = Rating.movie_id;




SELECT * FROM MovieCast;
SELECT * FROM Actor;
SELECT * FROM Filmes;
SELECT * FROM Rating;