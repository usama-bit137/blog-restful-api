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
      default: Date.now(), // I think this creates a date instace of date from when the server runs
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
