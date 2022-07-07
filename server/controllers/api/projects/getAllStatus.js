const { getStatusQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  getStatusQuery()
    .then(({ rows }) => {
      res.json({
        message: "Successfully retrieved projects status",
        status: 200,
        data: rows,
      });
    })
    .catch((err) => next(err));
};
