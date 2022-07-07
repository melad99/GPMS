const connection = require('../../config/connection');

module.exports = (email) => connection.query('SELECT * FROM users WHERE email = ($1);', [email]);
