const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A first name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'A last name is required'],
  },
  username: {
    type: String,
    required: [true, 'A username is required'],
  },
  email: {
    type: String,
    required: [true, 'An email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'A password is required'],
    minlength: 8,
    select: false,
  },
  role: {
    type: String,
    required: [true, 'A user requiresa role'],
    enum: ['admin', 'reader'],
    default: 'reader',
  },
  passwordConfirm: {
    type: String,
    required: [true, 'A password must be confirmed'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords do not match!',
    },
  },
});

// Some mongoose middleware to encrypt the password:

userSchema.pre('save', async function (next) {
  // if the password is changed, move to the next bit;
  if (!this.isModified) return next();

  this.password = await bcrypt.hash(this.password, 12);
  // check if this works!

  // we don't need the passwordConfirmation once it has been validated
  this.passwordConfirm = undefined;
  next();
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
