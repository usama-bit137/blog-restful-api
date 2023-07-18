const express = require('express');
const controller = require('../controllers/postController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(controller.getAllPosts)
  .post(authController.protect, controller.createPost);

router
  .route('/:id')
  .get(controller.getPost)
  .patch(authController.protect, controller.updatePost)
  .delete(authController.protect, controller.deletePost);

// restrictTo on patch and delete,
module.exports = router;
