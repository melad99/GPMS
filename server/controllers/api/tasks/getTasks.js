const { getTasksQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  const { projectId } = req.params;
  getTasksQuery(projectId)
    .then(({ rows }) => {
      res.json({ message: "success", status: 200, data: rows });
    })
    .catch((err) => next(err));
};
