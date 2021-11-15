const router = require('express').Router();
const withAuth = require('../utils/auth');
const User = require('../../Models/user');

// Use withAuth middleware to prevent access to route
router.get('/', async (req, res) => {
    console.log('homepage route');
    try {
      let user;
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        });

      if (userData) {
      user = userData.get({ plain: true });
      }

      res.render('homepage', {
        ...user,
        logged_in: true,
        layout: false
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });  

  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('signup', {
      layout: signup
    });
  });

  //sign up page

  module.exports = router;