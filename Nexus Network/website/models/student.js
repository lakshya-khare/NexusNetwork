const express = require('express');
const router = express.Router();
const Material = require('../models/Material');
const Blog = require('../models/Blog');

// Display Study Materials
router.get('/materials', (req, res) => {
  Material.find({}, (err, materials) => {
    if (err) return console.error(err);
    res.render('materials', { materials });
  });
});

// Display Blogs
router.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) return console.error(err);
    res.render('blogs', { blogs });
  });
});

module.exports = router;
