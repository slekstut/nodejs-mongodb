const User = require('../models/user');

exports.getLogin = (req, res, next) => {
 // const isLoggedIn = req.get('Cookie').split('=')[1];
 console.log(req.session.isLoggedIn);
 res.render('auth/login', {
  path: '/login',
  pageTitle: 'Login',
  isAuthenticated: false
 });
};

exports.postLogin = (req, res, next) => {
 User.findById('610ba3b4c054e838d413b785')
 .then(user => {
   req.session.isLoggedIn = true;
   req.session.user = user;
   res.redirect('/');
  })
  .catch(err => console.log(err));
};