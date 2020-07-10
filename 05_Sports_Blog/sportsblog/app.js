const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')


// Mongoose connect

mongoose.connect('mongodb://localhost:27017/sportsblog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection


// Port
const port = 5000

// init app
const app = express()

// Moment for Date and Time
app.locals.moment = require('moment')

// Routes

const index = require('./routes/index')
const articles = require('./routes/articles')
const categories = require('./routes/categories')
const manage = require('./routes/manage')

// View setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// BodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// See docs for express messages and validator github.com/expressjs/express-messages ver: Express3+
app.use(require('connect-flash')())

app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req, res)
    next()
})

// Middleware for express validator: github.com/ctavan/express-validator

/*
app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        const namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root
        while (namespace.length) {
            formParam = '[' + namespace.shift() + ']'
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        }
    }
}))
*/


app.use(express.json());
app.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(user => res.json(user));
});

// ...rest of the initial code omitted for simplicity.


app.post('/user', (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(user => res.json(user));
});


app.use('/', index)
app.use('/articles', articles)
app.use('/categories', categories)
app.use('/manage', manage)




app.listen(port, '0.0.0.0', () => {
    console.log('Server started on port: ' + port)
})