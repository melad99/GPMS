const connection = require("../../config/connection");

module.exports = ({ status, content, project_id }) =>
  connection.query(
    `
  INSERT INTO tasks (status, content, project_id) VALUES ($1, $2, $3) RETURNING *
`,
    [status, content, project_id]
  );
