CREATE TABLE Cokenu_User (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM("ADMIN", "NORMAL")
);

CREATE TABLE Cokenu_Recipes (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    creation_date VARCHAR(255) NOT NULL
);

SELECT * FROM `Cokenu_User`;

SELECT * FROM `Cokenu_Recipes`