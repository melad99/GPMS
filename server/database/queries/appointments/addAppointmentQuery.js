const connection = require("../../config/connection");

module.exports = ({ time, place, project_id }) =>
  connection.query(
    `
  INSERT INTO appointments (time, place, project_id) VALUES ($1, $2, $3) RETURNING *
`,
    [time, place, project_id]
  );
