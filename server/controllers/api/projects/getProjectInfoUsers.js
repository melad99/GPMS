const { getProjectInfoUsersQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  const { projectId } = req.params;
  getProjectInfoUsersQuery(projectId)
    .then(({ rows }) => {
      res.json({
        message: "Successfully retrieved project info",
        status: 200,
        data: rows,
      });
    })
    .catch((err) => next(err));
};
