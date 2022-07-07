const { getUserProjectsQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  const { userId } = req.params;
  getUserProjectsQuery(userId)
    .then(({ rows }) => {
      res.json({
        message: "Successfully retrieved user projects",
        status: 200,
        data: rows,
      });
    })
    .catch((err) => next(err));
};
