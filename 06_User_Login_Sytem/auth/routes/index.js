const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const {
	body,
	validationResult
} = require('express-validator');
// const user = require('../models/user');

let User = require('../models/user')
// Home Page
router.get('/', ensureAuthenticated, (req, res, next) => {
	res.render('index');
});


// Register Form Get to display
router.get('/register', (req, res, next) => {
	res.render('register');
});

router.get('/logout', (req, res, next) => {
	req.logout()
	req.flash('success_msg', 'You logged out successfully.✅')
	res.redirect('/login')
})

// Login Get to display
router.get('/login', (req, res, next) => {
	res.render('login');
});

// Local Strategy

passport.use(new LocalStrategy((username, password, done) => {
	User.getUserByUsername(username, (err, user) => {
		if (err) throw err;
		if (!user) {
			return done(null, false, {
				message: 'User not found ❌'
			})
		}
		User.comparePassword(password, user.password, (err, isMatch) => { // Model function comparePassword
			if (err) throw err;
			if (isMatch) {

				return done(null, user);
			} else {
				return done(null, false, {
					message: 'Incorrect Password! ❌'
				})
			}
		})
		passport.serializeUser((id, done) => {
			done(null, user.id)
		})

		passport.deserializeUser((id, done) => {
			User.getUserById(id, (err, user) => { // Model function
				done(err, user)
			})
		})
	})
}))
// Serialize user



// Post request on /login

router.post('/login', (req, res, next) => {
	passport.authenticate('local', { // Use the local strategy implemented above
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	})(req, res, next)
})


// Express Validator Docs https://express-validator.github.io/docs/
// Process Register Form
router.post('/register', [
	body('name').notEmpty().withMessage('Name is required.'), // middleware if all goes good, then proceed to adding entry to DB
	body('username').notEmpty().withMessage('Username is required.'),
	body('email').notEmpty().withMessage('Email is required.'),
	body('email').isEmail().withMessage('Email must be a valid email addres.'),
	body("password", "invalid password")
	.isLength({
		min: 4
	})
	.custom((value, {
		req,
		loc,
		path
	}) => {
		if (value !== req.body.password2) {
			// trow error if passwords do not match
			throw new Error("Passwords don't match");
		} else {
			return value;
		}
	})
], (req, res, next) => {

	// let errors = req.validationErrors();
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		// console.log('---------------------')
		// console.log(req.body.password)
		// console.log(req.body.password2)
		// console.log("REACHED Line 60 ✅✅")

		console.log(errors)
		console.log('---------------------')
		res.render('register', {
			errors: errors.array()
		});
	} else {
		const newUser = new User({
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		})


		// Register User
		console.log("Added to DB ✅✅")
		User.createUser(newUser, (err, user) => {
			if (err) throw err; // Line below sends the message for flash notifier.
			req.flash('success_msg', 'You are registered! Please proceed to login.✅✅')
			res.redirect('/login')
		})
	}
});

// Access Control
function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		req.flash('error_msg', 'You are not authorized to view that page!⛔⛔')
		res.redirect('/login')
	}
}

module.exports = router;