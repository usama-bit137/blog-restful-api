const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// SIGNUP AND LOGIN
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
// PASSWORD RESET FUNCTIONALITY:
// router.post('/forgotPassword', authController.forgotPassword);
// router.post('/changePassword', authController.changePassword)

// LOGGED IN USER CHANGES PASSWORD
// router.patch('updateMyPassword', authController.protect, authController.updatePassword)

// ADMIN ROUTES
router.use(authController.protect, authController.restrictTo('admin'));
router.route('/').get(userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser);

module.exports = router;
