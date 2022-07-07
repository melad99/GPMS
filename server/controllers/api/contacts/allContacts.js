const { getContactQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  getContactQuery()
    .then(({ rows }) => {
      res.json({ message: "success", status: 200, data: rows });
    })
    .catch((err) => next(err));
};
