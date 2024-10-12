const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/User');
const app = express();

// Connect to MongoDB Atlas (Free Cloud Database)
mongoose.connect('your-mongo-db-url', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware for Passport and Sessions
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// Listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
