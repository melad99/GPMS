const { addProjectTechniquesQuery } = require("../../../database/queries");
const { customError } = require("../../error");

module.exports = (req, res, next) => {
  const { techniques } = req.body;
  const { projectId } = req.params;

  techniques.forEach((tech) => {
    addProjectTechniquesQuery({
      projectId,
      tech,
    })
      .then(({ rows }) => {
        res.status(201).json({
          status: 201,
          message: "Techniques Added",
          data: rows[0],
        });
      })
      .catch((err) =>
        err.details ? next(customError(err.details[0].message, 400)) : next(err)
      );
  });
};
