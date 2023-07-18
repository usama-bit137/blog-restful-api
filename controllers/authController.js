const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');
const AppError = require('../utils/AppError');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

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

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError('Please provide email and password', 400));

  const user = await User.findOne({ email }).select('+password');

  if (!user || !user.correctPassword(password, user.password))
    return new AppError('Incorrect email or password');

  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
  });
};
