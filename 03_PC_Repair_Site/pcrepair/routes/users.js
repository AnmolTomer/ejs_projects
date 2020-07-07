var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get('/test', function (req, res, next) { // On doing /users/test we will get test page.
  res.send('<h1>Test Page</h1>');
});
module.exports = router;