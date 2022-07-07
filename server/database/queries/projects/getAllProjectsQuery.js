const connection = require("../../config/connection");

module.exports = () => connection.query(`SELECT * FROM projects`);
