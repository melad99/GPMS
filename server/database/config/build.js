const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'build.sql'), 'utf8').toString();
  return connection.query(sql);
};

module.exports = dbBuild;
