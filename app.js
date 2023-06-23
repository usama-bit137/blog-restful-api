const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routes/postRoutes');

const app = express();

// JSON body parser:
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/posts', postRouter);

module.exports = app;
