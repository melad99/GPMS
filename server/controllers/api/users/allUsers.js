const { getAllUsersQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  getAllUsersQuery()
    .then(({ rows }) => {
      res.json({ message: "success", status: 200, data: rows });
    })
    .catch((err) => next(err));
};
