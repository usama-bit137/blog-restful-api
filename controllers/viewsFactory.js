const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const Post = require('../models/postModel');

exports.getPage =
  (...titleInfo) =>
  (req, res) => {
    if (titleInfo.length < 2) titleInfo.push(titleInfo[0].toLowerCase());
    res.status(200).render(titleInfo[1], {
      title: titleInfo[0],
    });
  };

exports.getAllPosts = catchAsync(async (req, res) => {
  const posts = await Post.find().sort({ creationDate: -1 });
  res.status(200).render('blogs', {
    title: 'All Posts',
    posts,
  });
});

exports.getPost = catchAsync(async (req, res, next) => {
  if (req.params.slug !== 'new') {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return next(new AppError('No post with that name', 404));
    res.status(200).render('blog-post', {
      title: `Post: ${post.title}`,
      post,
    });
  }
  next();
});
