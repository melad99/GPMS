const connection = require('../../config/connection');

module.exports = ({ postId }) => connection.query('DELETE FROM posts WHERE id = $1 RETURNING *', [postId]);
