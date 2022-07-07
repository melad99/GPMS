const connection = require("../../config/connection");

module.exports = ({ project_id }) =>
  connection.query(
    `
SELECT * FROM appointments
WHERE project_id = $1
`,
    [project_id]
  );
