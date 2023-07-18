const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// JSON body parser:
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

console.log(`You are in the ${process.env.NODE_ENV} enviroment!`);

app.use('/api/posts', postRouter);
app.use('/api/users', userRoutes);

app.all('*', (req, res, next) => {
  // const err = new Error(`Invalid URL ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;
  next(new AppError(`Invalid URL ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
