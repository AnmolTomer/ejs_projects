# 04 To-Do App using MongoDB

## 04_01 Project Intro

- From this project onwards, we will start moving away from basic introductory stuff and move towards building real world apps. Express is known for creating great CRUD i.e. (Create,Read, Update, Delete operation) apps.
- We will build a To-Do application, where we use CRUD operations. Even though this project is really basic, it is a great implementation of all CRUD operations without stressing too much over the UI or other aspects.
- We will use MongoDB a NoSQL database. We will use Embedded JS Template engine for this project as we have seen Pug in previous project.

## Project Topics:

- Getting Started with MongoDB
- MongoDB Driver
- CRUD Functionality
- Form Processing and Uploading to DB
- EJS Template Engine

## 04_02 MongoDB Advantages

>## What is MongoDB ?
- A NoSQL (Not only SQL) database, it's a non-relational database.
- Document Database: It stores data inside of documents, MongoDB doesn't use rows and tables like relational databases, instead uses collections of documents. And these documents are basically formatted like JSON objects. If you understand JSON and how that is structured in terms of objects and arrays of objects then you already understand how MongoDB stores data to a large extent.

>## Advantags of NoSQL
- **Schemeless (Partially)**: Doesn't need pre-defined set of rules for data, we can create these as we go. Allows for things like a blog post with tags in it, and another blog post with no tags. Much less strict when compared to SQL DBs.
- **Scalable**: (Scale Out), MongoDB is much more scalable than a relational DB, what this means is total amount of disc space can be expanded as needed.
- Runs on Cheap Hardware, thus better to maintain and manage.

```json
user: {
    name: 'John Doe',
    age: 35,
    email:'jdoe@xyz.com',
    phones: ['555-555-5555','666-666-6666'],
    address: {
        street:'101 Main St.',
        city: 'Portland',
        state: 'Manchester'
    }
}
```
>## Common MongoDB Syntax

<!-- To create collection -->
- `db.createCollection('users')`

<!-- We can call different methods on the collection such as following: -->

- `db.users.insert({name:'John Doe',email:'jdoe@xyz.com'})`

- `db.users.find()`

- `db.users.update({_id:1},{$set:{name:'Bob'}})`

- `db.users.remove({_id:1})`

## MongoDB Driver

- We use basic MongoDB driver that provides interaction with MongoDB.
- Interaction through callbacks and promises. Can take advantages of the new ES6 features.

## Installation:
`npm install mongodb --save`

## Connecting to MongoDB

```js
var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/myproject';
MongoClient.connect(url,(err,db) => {
    console.log("Connected successfully to server");
});
```

- Example of finding documents using a function:

```js
var findDocuments = (db,callback) => {
    var collection = db.collection('documents');
    collection.find({}).toArray((err,docs) => {
        console.log("Found the following records: ");
        console.log(docs);
        callback(docs);
    });
}
```

## 04_03 MongoDB Installation :

- Go to [this](https://www.mongodb.com/) site or for linux follow the instructions below:

- To install MongoDB: `sudo apt install -y mongodb`

- To check MongoDB Status: `sudo systemctl status mongodb`: 

- To define database and log file path: `mongod --directoryperdb --dbpath ~/software/mongodb/data/db --logpath ~/software/mongodb/log/mongo.log`

- To go to Mongo Shell: `mongo`

![](https://i.imgur.com/nqfyyBw.png)

- Creating collections and adding users:

![](https://i.imgur.com/uyA0VNS.png)

- We won't be using mongo shell that often, MongoDB driver for node or mongoose is what we will be using in our projects and drivers create the DBs on the fly on its own, so we do not have to pre-format anything or stick to some syntax.

## 04_04 App setup EJS

- Create a directory `todoapp`. >> `npm init` to create package.json file. >> `npm install mongodb ejs express body-parser --save`
- Go to app.js and change import modules as required.
- With EJS we do not have a layout as we had with Pug, it uses something called partials. We create partial to avoid repetition of code. Create a new folder inside views called `partials` and inside partials we create `header.ejs` and `footer.ejs`.
- Insert in index.ejs following to include paritals header.ejd and footer.ejs in the file index.ejs:

```js
<%- include ("../views/partials/header") %>
HELLO FROM INDEX
<%- include ("../views/partials/footer") %>
```

## 04_05 MongoDB Driver Fetching Todos

>## MongoDB Driver

- Create variable called MongoClient in app.js as shown in `04_02`.

