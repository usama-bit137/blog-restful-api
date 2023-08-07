const express = require('express');
const factory = require('../controllers/viewsFactory');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(authController.isLoggedIn);

router.get('/', factory.getPage('Homepage', 'base'));
router.get('/signup', factory.getPage('Sign up for a new account', 'signup'));
router.get('/login', factory.getPage('Log in to your account', 'login'));

router.get('/posts', factory.getAllPosts);

router.get(
  '/posts/new',
  authController.protect,
  authController.restrictTo('admin'),
  factory.getPage('New post', 'new')
);

router.get('/posts/:slug', factory.getPost);

router.get('/about', factory.getPage('About'));
router.get('/contact', factory.getPage('Contact'));

module.exports = router;
