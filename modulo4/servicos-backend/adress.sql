CREATE Table adress (
    CEP VARCHAR(255) PRIMARY KEY,
    Logradouro VARCHAR(255) NOT NULL,
    Número INT NOT NULL,
    Complemento VARCHAR(255),
    Bairro VARCHAR(255) NOT NULL,
    Cidade VARCHAR(255) NOT NULL,
    Estado VARCHAR(255) NOT NULL);

SELECT * FROM adress;

INSERT INTO adress
(CEP, Logradouro, Número, Complemento, Bairro, Cidade, Estado)
VALUES (
            "36050-330",
            "Rua José Antônio Benhame",
           "3136702",
            "",
            "Progresso",
            "Juiz de Fora",
            "MG"
        );
