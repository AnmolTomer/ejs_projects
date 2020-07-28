var express = require('express');
var router = express.Router();
const {
  body,
  validationResult
} = require('express-validator');

// Home Page
router.get('/', (req, res, next) => {
  res.render('index');
});

// Register Form
router.get('/register', (req, res, next) => {
  res.render('register');
});


// Process Register
router.post('/register', [
  body('name').notEmpty().withMessage('Name is required.'), // middleware if all goes good, then proceed to adding entry to DB
  body('username').notEmpty().withMessage('Username is required.'),
  body('email').notEmpty().withMessage('Email is required.'),
  body('email').isEmail().withMessage('Email must be a valid email addres.'),
  body('password').notEmpty().withMessage('Password field is required.'),
  body('password2').equals('password').withMessage('Passwords do not match.')

], (req, res, next) => {

  const errors = validationResult(req);
  // let errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors.array()
    });
  } else {
    console.log('SUCCESS');
    return;
  }
});

module.exports = router;