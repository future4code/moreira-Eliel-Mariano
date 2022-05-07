CREATE TABLE Labook_User(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

SELECT * from Labook_User;

SELECT * from Labook_Posts;

SELECT * FROM Labook_Posts
WHERE id = "4ff9d4ed-b7cd-4fac-8958-9eaf6626e31e";



