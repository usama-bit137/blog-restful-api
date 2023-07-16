const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.route('/').get(controller.getAllUsers).post(controller.createUser);

module.exports = router;
