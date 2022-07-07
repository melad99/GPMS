const { customError } = require('../controllers/error');
const { verifyToken } = require('../utils');

module.exports = (req, res, next) => {
  const { cookies } = req;

  try {
    if (!cookies) throw customError('Unauthorized', 401);
    const { access_token: token } = cookies;
    if (!token) throw customError('Unauthorized', 401);
    verifyToken(token).then((user) => {
      req.id = user.id;
      next();
    });
  } catch (err) {
    if (err.toString().includes('JsonWebTokenError')) next(customError(err.message, 401));
    else next(err);
  }
};
