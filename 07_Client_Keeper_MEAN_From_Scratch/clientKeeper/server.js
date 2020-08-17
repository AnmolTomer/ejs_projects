const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// instantiate the app
const app = express()

var ObjectId = require('mongodb').ObjectID;

// Port
const port = 3000

// MongoJS
const mongojs = require('mongojs')
const db = mongojs('clientkeeper', ['clients']) // const db = mongojs('DBName', ['collection'])

// Static directory - This is where angular will know our compiled app

app.use(express.static(path.join(__dirname, 'public')))

// bodyParser middleware
app.use(bodyParser.json())

// Allow requests from angular
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
})

// Routes

app.get('/', (req, res) => {
    res.send('Please use /api/clients')
})

// /api/clients route - GET Request


app.get('/api/clients', (req, res, next) => {
    // Should return all clients in DB.
    db.clients.find().sort({
        first_name: 1 // Sort by first name
    }, (err, clients) => {
        if (err) {
            res.send(err)
        }
        res.json(clients) // If no error send clients back from MongoDB clients collection.
    });
})

// /api/clients route - POST Request

app.post('/api/clients', (req, res, next) => {
    // Get the stuff from page and insert into DB
    db.clients.insert(req.body, (err, clients) => {
        if (err) {
            res.send(err) // To test out this route we need some tool to make the request on our route. RestEasy is a great chrom extension.
        }
        res.json(clients)
    });

})

// Update client PUT request

app.put('/api/clients/:id', (req, res, next) => { // We would need particular ID of some stuff before we edit it out.
    const id = req.params.id
    // findAndModify, we do query and we have an _id variable which is an object id so we have to wrap it in mongojs.objectId
    db.clients.findAndModify({
        query: {
            _id: mongojs.ObjectID(id)
        },
        update: {
            $set: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                company: req.body.company
            }
        },
        new: true // If record is not there then create it.

    }, (err, client) => {
        res.json(client)
    });
})

// Delete Client - Delete

app.delete('/api/clients/:id', (req, res, next) => {
    const id = req.params.id
    // Get the stuff from page and insert into DB
    db.clients.remove({
        _id: mongojs.ObjectID(id)
    }, (err, clients) => {
        if (err) {
            res.send(err)
        }
        res.json(clients)
    });

})


// Listen on some port.
app.listen(port, '0.0.0.0', () => {
    console.log("Server started on port" + port)
})

// Add to package.json "start": "node server" // Gives us npm start functionality.
// Angular frontend will go in public folder.

// Routes for API to grab clients from DB and add them and so on.