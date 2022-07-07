const { Pool } = require("pg");
require("env2")(".env");

let DB_URL = "";
let sslValue = false;
if (process.env.NODE_ENV === "production") {
  sslValue = { rejectUnauthorized: false };
  DB_URL = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === "development")
  DB_URL = process.env.DEV_DB_URL;
else if (process.env.NODE_ENV === "test") DB_URL = process.env.TEST_DB_URL;
else throw new Error("NO DATABASE URL FOUND!");

const options = {
  connectionString: DB_URL,
  ssl: sslValue,
};

module.exports = new Pool(options);
