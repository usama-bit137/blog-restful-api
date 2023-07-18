const User = require('../models/usersModel');

exports.signup = async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: 'status',
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res, next) => {
  // 1) Check email and password exists
  // 2) Check if user exists && password is correct
  // 3) If everything ok, send token to client
};
