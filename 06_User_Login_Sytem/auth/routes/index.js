var express = require('express');
var router = express.Router();
const {
  body,
  validationResult
} = require('express-validator');
// const user = require('../models/user');

let User = require('../models/user')
// Home Page
router.get('/', (req, res, next) => {
  res.render('index');
});

// Login Get to display
router.get('/login', (req, res, next) => {
  res.render('login');
});


// Register Form Get to display
router.get('/register', (req, res, next) => {
  res.render('register');
});

// Express Validator Docs https://express-validator.github.io/docs/
// Process Register Form
router.post('/register', [
  body('name').notEmpty().withMessage('Name is required.'), // middleware if all goes good, then proceed to adding entry to DB
  body('username').notEmpty().withMessage('Username is required.'),
  body('email').notEmpty().withMessage('Email is required.'),
  body('email').isEmail().withMessage('Email must be a valid email addres.'),
  body("password", "Password field required.").notEmpty().isLength({
    min: 4
  }).custom((value, {
    req
  }) => {
    if (value !== req.body.password2) {
      // trow error if passwords do not match
      throw new Error("Passwords don't match");
    }
    return value
  })

  // body('password2').custom((value, {
  //   req
  // }) => {
  //   if (value !== req.body.password) {
  //     throw new Error('Passwords do not match.')
  //   }
  //   return true;
  // })


], (req, res, next) => {

  // let errors = req.validationErrors();
  const errors = validationResult(req);
  if (errors) {
    console.log("REACHED Line 60 ✅✅")
    res.render('register', {
      errors: errors.array()
    });
  } else {
    const newUser = new User({
      name: name,
      username: username,
      email: email,
      password: password
    })
    console.log(req.body.password)
    console.log(req.body.password2)
    console.log("REACHED Line 73 ✅✅")
    // Register User
    User.registerUser(newUser, (err, user) => {
      if (err) throw err;
      res.redirect('/login')
    })
  }
});

module.exports = router;