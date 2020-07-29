const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')


// Init app
const app = express()
port = 3000

// View Engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//  Route Files
const index = require('./routes/index')
const users = require('./routes/users.js')


// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(session({
    cookie: {
        maxAge: 60000
    },
    secret: 'woot',
    resave: true,
    saveUninitialized: false
}))

// Initialize passport
app.use(passport.initialize())
app.use(passport.session())

app.use(flash());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null
    next()
});
//  Routing
app.use('/', index)
app.use('/users', users)


// Start server
app.listen(port, () => {
    console.log('Server started on port ' + port)
})