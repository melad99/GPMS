const bcrypt = require('bcryptjs');

const comparePasswords = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

module.exports = comparePasswords;
