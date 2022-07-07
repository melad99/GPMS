const {
  addAppointmentQuery,
  checkAppointmentQuery,
} = require("../../../database/queries");
const { appointmentValidate } = require("../../../utils");
const { customError } = require("../../error");

module.exports = (req, res, next) => {
  appointmentValidate
    .validateAsync(req.body)
    .then(() => checkAppointmentQuery(req.body))
    .then(({ rows }) => {
      if (rows.length > 0) {
        throw customError("This project is already booked.", 400);
      }
      return addAppointmentQuery(req.body);
    })
    .then(({ rows }) =>
      res.status(201).json({
        message: "Appointment added successfully",
        status: 201,
        data: rows[0],
      })
    )
    .catch((err) =>
      err.details ? next(customError(err.message, 400)) : next(err)
    );
};
