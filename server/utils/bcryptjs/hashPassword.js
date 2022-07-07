const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hash(password, 10);

module.exports = hashPassword;
