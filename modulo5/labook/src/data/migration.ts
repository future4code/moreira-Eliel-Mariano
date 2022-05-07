import { BaseDatabase } from "./BaseDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class CreateTables extends BaseDatabase{
   createTables = () => this.connection.raw(`
      CREATE TABLE IF NOT EXISTS Labook_User (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL,
         role VARCHAR(255) DEFAULT 'NORMAL'
      );
      
      CREATE TABLE IF NOT EXISTS Labook_Posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(2500) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("NORMAL", "EVENT") DEFAULT "NORMAL",
         created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES Labook_User(id)
      )            
   `)
   .then(() => { console.log("Tables created successfully!!") })
   .catch(printError)

   closeConnection = () => { this.connection.destroy() }

}
const migrations = new CreateTables()

migrations.createTables()
   .finally(migrations.closeConnection)