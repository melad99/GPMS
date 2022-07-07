const connection = require("../../config/connection");

module.exports = ({ projectId, user }) =>
  connection.query(
    `
    INSERT INTO projects_users (project_id, user_id) VALUES ($1, $2) RETURNING *
`,
    [projectId, user]
  );
