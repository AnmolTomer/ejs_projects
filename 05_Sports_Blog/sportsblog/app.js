const express = require('express')
const path = require('path')
const session = require('express-session')
const mongoose = require('mongoose')

// Mongoose connect
mongoose.connect('mongodb://localhost:27017/sportsblog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection


// Port
const port = 3000;

var app = express();
app.locals.moment = require('moment')

app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));
// Views dir setup

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// More on how body-parser or express parsing capability works https://www.geeksforgeeks.org/body-parser-middleware-in-node-js/

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set static dir

app.use(express.static(path.join(__dirname,'public')))

// Middleware for express messages

app.use(require('connect-flash')());
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

const index = require('./routes/index')
const categories = require('./routes/categories')
const manage = require('./routes/manage')
const articles = require('./routes/articles')

// -x-x-x-x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x--x-x-

app.use('/', index);
app.use('/articles', articles);
app.use('/categories', categories);
app.use('/manage', manage);


app.listen(port, () => {
    console.info(`Server started on port ${port} ✅ 🚀`);
  });