const { getUserInfoQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  const { userId } = req.params;
  getUserInfoQuery(userId)
    .then(({ rows }) => {
      res.json({ message: "success", status: 200, data: rows });
    })
    .catch((err) => next(err));
};
