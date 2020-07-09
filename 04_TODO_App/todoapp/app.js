const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Port
const port = 5000;

// Init app
const app = express();
const assert = require('assert')

const MongoClient = require('mongodb', ).MongoClient;
const ObjectID = require('mongodb').ObjectID;
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


app.get('/', (req, res, next) => {
    Todos.find({}).toArray((err, todos) => {
        if (err) {
            return console.log(err);
        }
        console.log('- - - - - - - - - - - - - - - - - - - \n')
        console.log('All DB Items:\n')
        console.log(todos);
        console.log('- - - - - - - - - - - - - - - - - - - \n')
        res.render('index', {
            todos: todos
        });
    });
});

app.post('/todo/add', (req, res, next) => {
    // console.log('submitted') // To test if route is working
    // Create todo object
    const todo = {
        text: req.body.title,
        body: req.body.info,
    }

    // Insert todo object to the database
    Todos.insertOne(todo, (err, result) => {
        if (err) {
            console.log(err)
        }

        console.log('Todo Added:\n\nText: ' + todo.text + '\nBody: ' + todo.body)
        console.log('- - - - - - - - - - - - - - - - - - - \n')
        // redirect after submission to the page
        res.redirect('/')
    })

});

app.delete('/todo/delete/:id', (req, res, next) => {
    const query = {
        _id: ObjectID(req.params.id)
    }
    Todos.deleteOne(query, (err, response) => {
        if (err) {
            console.log(err)
        }
        console.log('Todo Removed')
        res.sendStatus(200);
    })
});

app.get('/todo/edit/:id', (req, res, next) => {
    const query = {
        _id: ObjectID(req.params.id)
    }
    Todos.find(query).next((err, todo) => {
        if (err) {
            return console.log(err);
        }

        res.render('edit', {
            todo: todo
        });
    });
});

app.post('/todo/edit/:id', (req, res, next) => {
    const query = {
        _id: ObjectID(req.params.id)
    }
    // Get the stuff from a form and store in the object called todo.
    const todo = {
        text: req.body.title,
        body: req.body.info,
    }

    // Update query todo object of the database, by passing the object todo which gets stuff from the form.
    Todos.updateOne(query, {
        $set: todo
    }, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log('Todo Updated:\n\nText: ' + todo.text + '\nBody: ' + todo.body)
        // redirect after submission to the page
        res.redirect('/')
    })

});