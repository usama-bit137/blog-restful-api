const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const app = require('./app');

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Database Connection Successful... Happy Blogging!'));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server started at ${new Date().toJSON().slice(11, -2)} on port: ${port}`
  );
});
