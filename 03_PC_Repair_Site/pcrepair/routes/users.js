var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('<h1>Users Page: Under Construction 👷‍♀️🛠🛠</h1>');
  console.log("All Users Page Accessed ✅⚡");
});


router.get('/test', function (req, res, next) { // On doing /users/test we will get test page.
  res.send('<h1>Individual User Page: Under Construction 👷‍♀️🛠🛠</h1>');
  console.log("Test Individual User Page Accessed ✅⚡");
});
module.exports = router;