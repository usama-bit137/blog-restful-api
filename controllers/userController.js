const User = require('../models/usersModel');

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
};

exports.createUser = async (req, res, next) => {
  const { firstName, lastName, email, username, password, passwordConfirm } =
    req.body;

  const user = await User.create({
    firstName,
    lastName,
    email,
    username,
    password,
    passwordConfirm,
  });

  res.status(201).json({
    status: 'success',
    data: {
      user,
    },
  });
};
