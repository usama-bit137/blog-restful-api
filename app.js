const path = require('path');
const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
const viewsRouter = require('./routes/viewsRoutes');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// JSON body parser:

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

console.log(`You are in the ${process.env.NODE_ENV} enviroment!`);

app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);

app.use('/', viewsRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Invalid URL ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
