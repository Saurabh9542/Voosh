// controllers/authController.js
const passport = require('passport');

// User registration
exports.registerUser = async (req, res, next) => {
  // Implement user registration logic
};

// User login
exports.loginUser = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
});

// User logout
exports.logoutUser = (req, res) => {
  req.logout();
  res.redirect('/');
};
