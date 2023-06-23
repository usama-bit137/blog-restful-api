const Post = require('../models/postModel');

exports.getAllPosts = async (req, res, next) => {
  const posts = await Post.find();
  res.status(500).json({
    status: 'success',
    posts: {
      posts,
    },
  });
};

exports.getPost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json({
    status: 'sucess',
    post,
  });
};

exports.createPost = async (req, res, next) => {
  const post = await Post.create({
    posterName: req.body.posterName,
    bodyText: req.body.bodyText,
  });

  res.status(201).send({
    status: 'success',
    post,
  });
};
