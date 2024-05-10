// routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      const { email, password } = req.body;
      // Check if the email is already registered
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
      // Create a new user
      const newUser = await User.create({ email, password });
      return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  


// Google authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback
router.get('/google/callback', passport.authenticate('google', { successRedirect: '/profile', failureRedirect: '/' }));

// Facebook authentication
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// Facebook callback
router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/' }));

// Twitter authentication
router.get('/twitter', passport.authenticate('twitter'));

// Twitter callback
router.get('/twitter/callback', passport.authenticate('twitter', { successRedirect: '/profile', failureRedirect: '/' }));

// GitHub authentication
router.get('/github', passport.authenticate('github'));

// GitHub callback
router.get('/github/callback', passport.authenticate('github', { successRedirect: '/profile', failureRedirect: '/' }));

module.exports = router;
