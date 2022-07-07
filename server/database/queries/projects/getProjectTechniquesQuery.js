const connection = require("../../config/connection");

module.exports = (projectId) =>
  connection.query(
    `
    SELECT array_agg(t.name) AS name
    FROM projects_techniques AS pt
    JOIN techniques AS t ON t.id = pt.technique_id
    WHERE pt.project_id = $1`,
    [projectId]
  );
