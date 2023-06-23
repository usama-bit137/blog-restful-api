const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      default: 'Unknown',
      required: [true, 'A post requires and author'],
    },
    bodyText: {
      type: String,
      required: [true, 'A post requires body text'],
    },
    creationDate: {
      type: Date,
      default: Date.now(),
    },
    edittedAt: {
      type: Date,
    },
    icon: {
      type: String,
    },
    images: {
      type: [String],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
