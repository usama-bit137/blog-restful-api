const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).render('base');
});

router.get('/all', (req, res) => {
  res.status(200).render('blogs', {
    title: 'All Posts',
  });
});

module.exports = router;
