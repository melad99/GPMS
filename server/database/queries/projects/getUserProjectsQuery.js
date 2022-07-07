const connection = require("../../config/connection");

module.exports = (userId) =>
  connection.query(
    `SELECT array_agg(project_id) AS id, array_agg(p.name) AS names, array_agg(p.category_id) AS status
    FROM projects_users AS pu
    JOIN projects AS p
    ON p.id = pu.project_id
    GROUP BY pu.user_id
    HAVING pu.user_id = $1`,
    [userId]
  );
