const connection = require("../../config/connection");

module.exports = ({
  name,
  description,
  link,
  rating,
  category_id,
  created_at,
}) =>
  connection.query(
    `
  INSERT INTO projects (name, description, link, rating, category_id,created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
`,
    [name, description, link, rating, category_id, created_at]
  );
