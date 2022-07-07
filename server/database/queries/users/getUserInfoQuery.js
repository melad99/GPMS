const connection = require("../../config/connection");

module.exports = (id) =>
  connection.query(
    "SELECT id, username, name, email FROM users WHERE id = ($1)",
    [id]
  );
