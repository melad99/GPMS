const { verify } = require('jsonwebtoken');

module.exports = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return reject(err);
    return resolve(decoded);
  });
});
