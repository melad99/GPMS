const { join } = require("path");

module.exports = (req, res) => {
  res.sendFile(join(__dirname, "../../../client/html/adminDashboard.html"));
};
