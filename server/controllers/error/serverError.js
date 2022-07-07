module.exports = (err, req, res, next) => {
  console.log("server err", err);
  res.status(err.status || 500).json({
    message: err.status ? err.message : "Internal Server Error",
    status: err.status || 500,
  });
};
