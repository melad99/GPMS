const { deletePostQuery } = require("../../../database/queries");
const { customError } = require("../../error");

module.exports = (req, res, next) => {
  const { postId } = req.params;
  deletePostQuery({ postId })
    .then(({ rows }) => {
      if (!rows.length) throw customError("There Is No Post", 400);
      res.json({
        message: "Post Deleted Successfully",
        status: 200,
        data: rows[0],
      });
    })
    .catch((err) => next(err));
};
