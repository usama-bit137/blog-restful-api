const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routes/postRoutes');

const app = express();

// JSON body parser:
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

console.log(`You are in the ${process.env.NODE_ENV} enviroment!`);

app.use('/api/v1/posts', postRouter);

app.all('*', (req, res, next) => {
  res.status(400).json({
    status: 'fail',
    message: `Invalid URL ${req.originalUrl} on this server`,
  });
});

module.exports = app;
