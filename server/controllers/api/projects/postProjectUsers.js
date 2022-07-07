const { postProjectUsersQuery } = require("../../../database/queries");
const { customError } = require("../../error");

module.exports = (req, res, next) => {
  const { users } = req.body;
  const { projectId } = req.params;

  users.forEach((user) => {
    postProjectUsersQuery({
      projectId,
      user,
    })
      .then(({ rows }) => {
        res.status(201).json({
          status: 201,
          message: "Users Added",
          data: rows[0],
        });
      })
      .catch((err) =>
        err.details ? next(customError(err.details[0].message, 400)) : next(err)
      );
  });
};
