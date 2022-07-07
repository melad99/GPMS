const connection = require('../../config/connection');

module.exports = (username) => connection.query('SELECT * FROM users WHERE username = ($1);', [username]);
