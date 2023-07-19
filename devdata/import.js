const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Posts = require('../models/postModel');

dotenv.config({ path: `${__dirname}/../config.env` });
const { DATABASE, DATABASE_PASSWORD } = process.env;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Database Connection Successful... Happy Blogging!'));

// READ JSON FILE
const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'));

// IMPORT JSON INTO DB
const importData = async () => {
  try {
    await Posts.create(posts);
    console.log('Posts successfully loaded ✉️');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA ON DB:
const deleteData = async () => {
  try {
    await Posts.deleteMany();
    console.log('Posts successfully deleted 💔');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') importData();
else if (process.argv[2] === '--delete') deleteData();
