const connection = require("../../config/connection");

module.exports = () =>
  connection.query(`
  SELECT
  (SELECT count(id) FROM projects)As allTotal,count(category_id) as total, category_id
  FROM
  projects GROUP BY category_id`);
