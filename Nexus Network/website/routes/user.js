const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Register User
router.post('/register', (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = new User({ name, email, password: bcrypt.hashSync(password, 10), role });
  newUser.save().then(user => res.redirect('/login'));
});

// Login User
router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
