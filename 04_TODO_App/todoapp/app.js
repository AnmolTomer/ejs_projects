const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Port
const port = 5000;

// Init app
const app = express();
const assert = require('assert')

const MongoClient = require('mongodb', ).MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'todoapp'

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect to mongodb

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.error(err)
        return
    }
    console.log("Connected successfully to server on url " + url);
    const db = client.db('todoapp')
    Todos = db.collection("todos");
    app.listen(port, () => {
        console.log('Server running on port ' + port);
    });

})




// const db = client.db(dbName); // stored inside db


// console.log(Todos)
// const Todos = client.db(dbName).collection("todos"); // called db.collection("todos")
// console.log(Todos);


app.get('/', (req, res, next) => {
    Todos.find({}).toArray((err, todos) => {
        if (err) {
            return console.log(err);
        }
        console.log(todos);
        res.render('index', {
            todos: todos
        });
    });
});