const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
const viewsRouter = require('./routes/viewsRoutes');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(helmet());
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again in an hour!',
});
app.use('/api', limiter);
// JSON body parser:
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
// Prevent Parameter Pollution
app.use(hpp());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
console.log(`You are in the ${process.env.NODE_ENV} enviroment!`);

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/', viewsRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Invalid URL ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
