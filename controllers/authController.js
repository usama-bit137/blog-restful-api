const User = require('../models/usersModel');

exports.signup = async (req, res, next) => {
  const { firstName, lastName, username, email, password, passwordConfirm } =
    req.body;
  const newUser = await User.create({
    firstName,
    lastName,
    username,
    email,
    password,
    passwordConfirm,
  });
  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
};
