let mongoose = require("mongoose");
const server = "127.0.0.1:27017"; // REPLACE WITH YOUR DB SERVER
const database = "myDB"; // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    if (!this._connect) this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
  _disconnect() {
    mongoose
      .disconnect()
      .then(() => {
        console.log("Database disconnection successfl");
      })
      .catch((err) => {
        console.error("Database disconnection error");
      });
  }
}

module.exports = new Database();
