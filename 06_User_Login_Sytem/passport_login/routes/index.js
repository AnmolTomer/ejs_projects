var express = require('express');
var router = express.Router();
const {
    check,
    validationResult
} = require('express-validator')
// Home Page
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/register', (req, res, next) => {
    res.render('register');
})

router.post('/register', [
    check('name', 'Name field is required.').isEmpty(),
    check('username', 'Username is required.').isEmpty(),
    check('email', 'Email must be a valid email address.').notEmpty(),
    check('email', 'Email must be a valid email address.').isEmail().normalizeEmail(),
    check('password', 'Password field is required.'),
    check('password', 'Passwords do not match.').equals('password')

], (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {

        // console.log("Error! User entered wrong details. Redirecting to register page...")
        console.log(errors)
        res.render('register', {
            errors: errors.array()
        })
        // Testing
        /*
        console.log(errors)
        return res.status(422).json({
            errors: errors.array()
        })
         */
    } else {
        console.log("Everything is correct! New User Signed Up!")
        return
    }

    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    // console.log(req.body)

});
module.exports = router;