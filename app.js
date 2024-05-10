// app.js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const passportConfig = require('./config/passport'); // Import Passport configuration

const app = express();

// Express session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

// Other middleware and routes...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
