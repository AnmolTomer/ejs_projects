var express = require('express');
var router = express.Router();

// Home Page
router.get('/', (req, res, next) => {
  res.render('../index');
});

// Register Form
// router.get('/register', (req, res, next) => {
//   res.render('../register')
// })
module.exports = router;