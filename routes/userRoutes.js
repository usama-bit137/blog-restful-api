const express = require('express');
const controller = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
router.post('/signup', authController.signup);
// router.get('/login', authController.login);
router.route('/').get(controller.getAllUsers).post(controller.createUser);

module.exports = router;
