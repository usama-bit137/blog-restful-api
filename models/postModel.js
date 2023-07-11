const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      default: 'Unknown',
      required: [true, 'A post requires and author'],
    },
    title: {
      type: String,
      required: [true, 'A post requires text content.'],
    },
    bodyText: {
      type: String,
      required: [true, 'A post requires text content.'],
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        username: { type: String },
        comment: { type: String },
      },
    ],
    icon: {
      type: String,
    },
    images: {
      type: [String],
    },
    edittedAt: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
