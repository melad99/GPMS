const connection = require("../../config/connection");

module.exports = (projectId) =>
  connection.query("SELECT * FROM tasks WHERE project_id = $1", [projectId]);
