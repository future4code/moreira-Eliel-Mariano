CREATE TABLE Labook_User(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

INSERT INTO Labook_User (id, name, email, password)
VALUES ("1", "eliel", "eliel@eliel.com", "123456");

SELECT * from Labook_User



