const connection = require("../../config/connection");

module.exports = (projectId) =>
  connection.query(`SELECT * FROM projects WHERE id = $1`, [projectId]);
