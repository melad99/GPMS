const { getProjectTechniquesQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  const { projectId } = req.params;
  getProjectTechniquesQuery(projectId)
    .then(({ rows }) => {
      res.json({
        message: "Successfully retrieved project info",
        status: 200,
        data: rows[0],
      });
    })
    .catch((err) => next(err));
};
