const express = require('express');
const factory = require('../controllers/viewsFactory');

const router = express.Router();

router.get('/posts', factory.getAllPosts);
router.get('/posts/:slug', factory.getPostBySlug);

// Cleaner:
router.get('/', factory.getPage('Homepage', 'base'));
router.get('/about', factory.getPage('About'));
router.get('/contact', factory.getPage('Contact'));
router.get('/login', factory.getPage('Log in to your account', 'login'));
router.get('/signup', factory.getPage('Sign up for a new account', 'signup'));
router.get('/new', factory.getPage('New post', 'new'));

module.exports = router;
