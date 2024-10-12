const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Dashboard: Role-Based Access
router.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }

  const role = req.user.role;
  if (role === 'admin') {
    res.render('admin_dashboard', { user: req.user });
  } else if (role === 'mentor') {
    res.render('mentor_dashboard', { user: req.user });
  } else if (role === 'blogger') {
    res.render('blogger_dashboard', { user: req.user });
  } else {
    res.render('student_dashboard', { user: req.user });
  }
});

module.exports = router;
