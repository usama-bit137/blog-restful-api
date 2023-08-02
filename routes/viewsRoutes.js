const express = require('express');
const Post = require('../models/postModel');
const factory = require('../controllers/viewsFactory');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).render('base');
});

router.get('/all', async (req, res) => {
  const posts = await Post.find();
  res.status(200).render('blogs', {
    title: 'All Posts',
    posts,
  });
});

// Cleaner:
router.get('/home', factory.getPage('Home'));
router.get('/about', factory.getPage('About'));
router.get('/contact', factory.getPage('Contact'));
router.get('/login', factory.getPage('Login'));
router.get('/signup', factory.getPage('Signup'));
router.get('/new', factory.getPage('New'));
module.exports = router;
