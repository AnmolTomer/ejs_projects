const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
// const expressValidator = require('express-validator')

const {
    check,
    validationResult
} = require('express-validator')

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

// Express session

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// See docs for express messages and validator github.com/expressjs/express-messages ver: Express3+
app.use(require('connect-flash')())
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req, res)
    next()
})

app.use(express.json());
app.use('/', index)
app.use('/articles', articles)
app.use('/categories', categories)
app.use('/manage', manage)




app.listen(port, '0.0.0.0', () => {
    console.log('Server started on port: ' + port)
})