var express = require('express');
var router = express.Router();

// Home Page
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

router.get('/', (req, res, next) => {
  res.render('/users')
})