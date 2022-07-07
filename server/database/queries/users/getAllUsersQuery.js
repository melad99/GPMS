const connection = require("../../config/connection");

module.exports = () =>
  connection.query("SELECT * FROM users WHERE role = $1", ["user"]);
