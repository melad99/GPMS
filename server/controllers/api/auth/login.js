const { customError } = require('../../error');
const { comparePasswords, loginValidate, signToken } = require('../../../utils');
const { checkUsernameQuery } = require('../../../database/queries');

module.exports = ({ body }, res, next) => {
  const { username, password } = body;
  let user;
  loginValidate.validateAsync(body)
    .then(() => checkUsernameQuery(username))
    .then(({ rowCount, rows }) => {
      if (!rowCount) throw customError('Wrong Username', 400);
      [user] = [rows[0]];
      return user;
    })
    .then((registerUser) => comparePasswords(password, registerUser.password))
    .then((isMatch) => {
      if (!isMatch) throw customError('Wrong Password', 400);
      return signToken(user);
    })
    .then((token) => res.status(201).cookie('access_token', token, { httpOnly: true }).json({ message: 'User logged successfully', status: 201 }))
    .catch((err) => err.details ? next(customError(err.details[0].message, 400)) : next(err));
};
