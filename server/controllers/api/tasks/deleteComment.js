const { deleteCommentQuery } = require("../../../database/queries");
const { customError } = require("../../error");

module.exports = (req, res, next) => {
  const { commentId } = req.params;
  deleteCommentQuery({ commentId })
    .then(({ rows }) => {
      if (!rows.length) throw customError("There Is No Comment", 400);
      res.json({
        message: "Comment Successfully Deleted",
        status: 200,
        data: rows[0],
      });
    })
    .catch((err) => next(err));
};
