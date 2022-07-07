const { getAllAppointmentsQuery } = require("../../../database/queries");

module.exports = (req, res, next) => {
  getAllAppointmentsQuery()
    .then(({ rows }) => {
      res.json({ message: "success", status: 200, data: rows });
    })
    .catch((err) => next(err));
};
