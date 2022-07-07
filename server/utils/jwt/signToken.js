const { sign } = require("jsonwebtoken");

module.exports = ({ id, username, email, role }) =>
  new Promise((resolve, reject) => {
    sign(
      { id, username, email, role },
      process.env.JWT_SECRET,
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      }
    );
  });
