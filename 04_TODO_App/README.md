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

- Ref: **app.js**

- Create variable called MongoClient in app.js as shown in `04_02`.

- Connect the DB with frontend and log the db entries into the console, inside the app.get route for home page in following manner:

```js
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
```

- Visit the EJs docs for more info: [link](https://ejs.co/#docs)

## 04_06 Add Delete Todos

- Go to index.ejs to create a form so that we can add data to MongoDB.
- If you restarted your system and you are getting errors while running mongo shell, do the following:
  - Delete mongo.log or rename it, in my case it was at `/home/cosmic/software/mongodb/log/mongo.log`, I renamed it to `mongo2.log`.
  - Run the mongod as sudo by passing directory and log file paths in following manner: `sudo mongod --directoryperdb --dbpath ~/software/mongodb/data/db --logpath ~/software/mongodb/log/mongo.log`
  - Create new db, as in my case old entries were deleted.

```bash
use todoapp
db.createCollection('todos')
db.todos.insert({text:'My Todo One',body:'This is first todo.'})
db.todos.insert({text:'My Todo Two',body:'This is second todo.'})
```

- Try running the node server of todo app using nodemon and see if you are able to see entries of DB in the console.
- Screenshot of entries being shown on console and browser:

![](https://i.imgur.com/dPncBCv.png)

![](https://i.imgur.com/2Bkyz8h.png)

- Create a form in index.ejs and since forms have a post request, add it in app.js.
- Think of what to do when you submit data from form, we want to user body-parser module to get parameters body.form.title and body.form.info and add those as an object into the database.
- We will also have to delete our todos. And this will be different to just getting something from a post request path and adding as an object to DB.
- We will have to accept a deleting request and we cannot do a delete request through a form like we did for add task.
- We will use jQuery and AJAX to make a delete request.
- We will have to go to index.ejs and add a delete link next to each todo. Inside the public folder, create a folder called `js` and create `main.js` in there. Add this file in the footer partials.
- We will use jQuery and we will also be using Bootstrap. To install bootstrap we will be using `Bower`, which is a frontend or client-side package manager. When we install bootstrap with bower it also installs jQuery as jQuery is a dependency.
- First we install bower and then using bower we install bootstrap.
- We can create a file called `.bowerrc` to specify what folder to use for bower components. Ref: `.bowerrc`

```bash
npm install -g bower
bower install bootstrap
bower install jquery
```

- Go back to footer.ejs and include jquery.
- Go to package.json and add static script `"start": "node app"`, this would allow you to run the server by typing `npm start`, because sometimes it would be node app, node server,node main etc. etc. so we define it inside the package.json itself, so that it would run on npm start irrespective of what our main entry-point file's name is.

- Add the delete route after taking in the id of the object to be removed.


## Update Todos

- Each task needs to have Edit and Delete option, go to index.ejs and edit it. Add the following inside the list item in index.ejs

```html
<a href="/todo/edit/<%= todo._id %>">✏️Edit</a>
```

- Now we need route for `/todo/edit/todo._id`, write that in app.js and after that we need to define edit page and we do so by writing edit.ejs file.

- After that we create the edit view. And Edit function on frontend should be now capable to fetch entries from DB so that those can be edited. Next on Edit page we will also put in a cancel button in case user wants to go back without editing.
- Now when we submit the form present on `Edit` page, it will go to `/todo/edit/<% todo._id %>` and that will be a post request, so we need to handle that, that's why we go to app.js to specify routes for form submission from edit page.

## 04_07 Bootstrap UI

- Next we implement bootstrap. Go to views >> partials >> header.ejs. After you are done editing the header.ejs, we move to index.ejs to align and give some style to tasks list. We will use grid system, to put form on left and tasks on right side. After you have added bootstrap classes to elements of index.ejs, next we move to edit page `edit.ejs` and give style to the form there.

- That's it. You have a fully functional todo application running on MongoDB.