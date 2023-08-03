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
  const posts = await Post.find();
  res.status(200).render('blogs', {
    title: 'All Posts',
    posts,
  });
});

exports.getPostBySlug = catchAsync(async (req, res, next) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post)
    return next(new AppError('The resource you requested does not exist', 404));
  res.status(200).render('blog-post', {
    title: `Post: ${post.title}`,
    post,
  });
});
