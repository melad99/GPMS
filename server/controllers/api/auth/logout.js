module.exports = (req, res, next) => {
  try {
    res
      .status(200)
      .clearCookie('access_token')
      .json({ message: 'Logged out successfully', status: 205 });
  } catch (err) {
    next(err);
  }
};
