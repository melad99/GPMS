const connection = require("../../config/connection");

module.exports = () =>
  connection.query(`
SELECT p.id AS projectId, p.name, p.description, a.place, a.time, a.id AS appointmentId
FROM appointments AS a
JOIN projects AS p ON p.id = a.project_id
Where time >= current_date
`);
// connection.query(`SELECT * FROM appointments`);
