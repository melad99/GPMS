const connection = require('../../config/connection');

module.exports = ({ commentId }) => connection.query('DELETE FROM comments WHERE id = $1 RETURNING *', [commentId]);
