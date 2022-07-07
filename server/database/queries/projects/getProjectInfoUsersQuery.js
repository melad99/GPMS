const connection = require("../../config/connection");

module.exports = (projectId) =>
  connection.query(
    `
  SELECT u.role, array_agg(u.name) AS name
  FROM projects_users AS pu
  JOIN users AS u ON u.id = pu.user_id
  WHERE pu.project_id = $1
  GROUP BY u.role`,
    [projectId]
  );
