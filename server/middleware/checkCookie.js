const { customError } = require('../controllers/error');
const { verifyToken } = require('../utils');

module.exports = (req, res) => {
  const { cookies } = req;
  if (cookies.access_token) {
    verifyToken(cookies.access_token)
      .then((user) => res.status(200).json({ message: 'Authorized', status: 200, user }))
      .catch(() => { throw customError('Unauthorized', 401); });
  } else throw customError('Unauthorized', 401);
};
