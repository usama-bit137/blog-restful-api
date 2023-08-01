const User = require('../models/usersModel');
const factory = require('./handlerFactory');

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.deleteUser = factory.deleteOne(User);

// ADMIN SHOULD NOT BE ABLE TO CREATE A USER
// USE /signup route.
// exports.createUser = factory.createOne(User);

// User should update password from the password update
// functionality.
// exports.updateUser = factory.updateOne(User);
