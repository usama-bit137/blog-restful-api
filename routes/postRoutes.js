const express = require('express');
const userController = require('../controllers/postController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllPosts)
  .post(authController.protect, userController.createPost);

router
  .route('/:id')
  .get(userController.getPost)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    userController.updatePost
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    userController.deletePost
  );

// restrictTo on patch and delete,
module.exports = router;
