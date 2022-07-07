const { addTaskQuery } = require("../../../database/queries");
const { taskValidate } = require("../../../utils");
const { customError } = require("../../error");

module.exports = (req, res, next) => {
  const {
    body: { status, content, project_id },
  } = req;

  taskValidate
    .validateAsync({ status, content, project_id })
    .then(() => addTaskQuery({ status, content, project_id }))
    .then(({ rows }) =>
      res.status(201).json({
        message: "Task added successfully",
        status: 201,
        data: rows[0],
      })
    )
    .catch((err) =>
      err.details ? next(customError(err.message, 400)) : next(err)
    );
};
