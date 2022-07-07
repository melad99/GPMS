const { getAllProjectsQuery } = require("../../../database/queries");

module.exports = (req, res, next) =>
  getAllProjectsQuery()
    .then(({ rows }) => {
      res.json({
        message: "Successfully retrieved all projects",
        status: 200,
        data: rows,
      });
    })
    .catch((err) => next(err));
