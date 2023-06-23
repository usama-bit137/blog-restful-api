const express = require('express');
const controller = require('../controllers/postController');

const router = express.Router();

router.route('/').get(controller.getAllPosts).post(controller.createPost);

router.route('/:id').get(controller.getPost);

module.exports = router;
