var express = require('express');
const session = require('express-session');
const {
    check,
    validationResult
} = require('express-validator');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('../register')
})

router.post('/',
    [
        check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
        check('email', 'Email is required')
        .isEmail(),
        check('password', 'Password is requried')
        .isLength({
            min: 1
        })
        .custom((val, {
            req,
            loc,
            path
        }) => {
            if (val !== req.body.password2) {
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        }),
    ], (req, res) => {
        var errors = validationResult(req).array();
        if (errors) {
            req.session.errors = errors;
            req.session.success = false;
            console.log(errors)
            res.redirect('/register');
        } else {
            req.session.success = true;
            res.redirect('/index');
        }
    });



// router.get('/', function (req, res) {
//     res.render('../register', {
//         success: req.session.success,
//         errors: req.session.errors
//     });
//     req.session.errors = null;
// });


module.exports = router;