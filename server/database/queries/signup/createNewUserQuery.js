const connection = require("../../config/connection");

module.exports = ({ username, name, email, password, role }) =>
  connection.query(
    `
  INSERT INTO users (username, name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id;
`,
    [username, name, email, password, role]
  );
