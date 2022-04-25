ex 1
a: usar strings nos da uma combinação muito maior para os ids, evitando que eles se repitam.

ex 2
a: temos uma função que insere um usuário na tabela.
b: CREATE Table usuário (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR (255)
);

ex 3
a: garante que a chave seja uma string. é usada para validar.