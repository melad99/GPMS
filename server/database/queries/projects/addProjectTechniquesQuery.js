const connection = require("../../config/connection");

module.exports = ({ projectId, tech }) =>
  connection.query(
    `
    INSERT INTO projects_techniques (project_id, technique_id) VALUES ($1, $2) RETURNING *
`,
    [projectId, tech]
  );
