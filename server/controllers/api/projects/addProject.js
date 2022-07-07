const { addProjectQuery } = require("../../../database/queries");
const { projectValidate } = require("../../../utils");
const { customError } = require("../../error");
const connection = require("../../../database/config/connection");

module.exports = (req, res, next) => {
  const {
    body: { name, description, link, rating, category_id, created_at },
    id: userId,
  } = req;
  let projectData;

  projectValidate
    .validateAsync(req.body)
    .then(() =>
      addProjectQuery({
        name,
        description,
        link,
        rating,
        category_id,
        created_at,
      })
    )
    .then(({ rows }) => {
      projectData = rows[0];
      const projectId = rows[0].id;
      return ((userId, projectId) =>
        connection.query(
          `INSERT INTO projects_users (user_id, project_id) VALUES ($1, $2) RETURNING *`,
          [userId, projectId]
        ))(userId, projectId);
    })
    .then(({ rows }) => {
      res.status(201).json({
        status: 201,
        message: "Project Added",
        data: rows[0],
        project: projectData,
      });
    })
    .catch((err) =>
      err.details ? next(customError(err.details[0].message, 400)) : next(err)
    );
};
