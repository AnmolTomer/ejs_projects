const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const hbs = require('express-hbs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const passport = require('passport')
const mongoose = require('mongoose')

// User router
const user = require('./routes/user.routes');

const users = require('./routes/users')
const index = require('./routes/index')
// const users = require('./routes/users')
// Express settings
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());


app.use(cookieParser());
app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}));

// Serve static resources
app.use('/public', express.static('public'));

// Render View
// app.engine('hbs', hbs.express4({
//     partialsDir: __dirname + '/views/partials',
// }));
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials',

    defaultLayout: './views/layouts/main'

}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/partials');

// Initiate API
app.use('/user', user)
app.use('/index', index)
app.use('/users', users)

app.use(require('connect-flash')())
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')('req', 'res')
    next()
})

// Define PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})