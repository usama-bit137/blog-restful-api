const Post = require('../models/postModel');
const APIFeatures = require('../utils/APIFeatures');

exports.getAllPosts = async (req, res, next) => {
  const features = new APIFeatures(Post.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const posts = await features.query;

  res.status(200).json({
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
    author: req.body.author,
    title: req.body.title,
    bodyText: req.body.bodyText,
  });

  res.status(201).send({
    status: 'success',
    post,
  });
};

exports.updatePost = async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });

  res.status(200).json({
    status: 'success',
    post,
  });
};

exports.deletePost = async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
