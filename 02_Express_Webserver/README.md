# 02 - Express Webserver

## 02_01 Project Intro

### Topics Covered:

✅ What is Express ?<br/>
✅ Basic Node Server Setup<br/>
✅ Express Setup and Routing<br/>
✅ Static Web Server<br/>
✅ Serving JSON, Downloads & POST requests.<br/>

- We will build a simple express web server in this section, we will also go over what is Express, routing, middleware and other node and express related topics. First we will create a basic Node.js server without express and only then we switch to installing Express and using it to create and serve static web pages.
- We will also go over serving JSON content in an API like format to the user, redirect the user from a particular URL, making post requests to the server.

## 02_02 What is Express ?

- Express is a web framework for Node.js. Node.js is a JavaScript run-time for creating powerful applications and Express is a framework which comes in form on NodeJS module, which can be installed using Node Package Manager (NPM).
- Express provides robust set of features for web and mobile applications. Allows us to easily create routes, access to HTTP utilities for creating middleware so that we can easily create extensive APIs.
- **Routing**: Refers to defining application end points, and are used to handle how different end-points respond to client requests.

```js
var express = require("express");
var app = express();
// respond with "hello world" when a GET request is made to /
app.get("/", function (req, res) {
  res.send("hello world");
});

// POST method route
app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});
```

- **Middleware**: This is another big part of Express, these are basically functions that have access to the request and response objects.

- Middleware can:

  - Execute any code
  - Make changes to requests and responses
  - End the req/res cycle
  - Call the next middleware in the stack

- **Installing Express**:

```js
npm install express // Puts in node modules folder
// To save in package.json manifest file
npm install express --save
```

## 02_03 Setting up Environment

- Download NodeJS from [here](https://nodejs.org/en/download/)
- Git from [here](https://git-scm.com) to use Git Bash or use Windows Terminal. Be sure to check `Use Git and optional Unix tools like ls and mkdir while installing on Windows.`
- Text Editor, Visual Studio Code (VSCode) from [here](https://code.visualstudio.com/download)

## 02_04 Very Basic Server Without Express

- Ref: **webserver_basic**
- Create a **package.json** file this is a manifest file that holds our application name,version, all the info about app as well as dependencies that needs to be installed before running the project. Run `npm init` command, enter the details to create package.json. Enter the details as shown below in image, and package.json will be created.

![](https://i.imgur.com/AAwd8ks.png)

- Create new file, in our case as entry point is `app.js`, so we will create that.
- After creating `app.js`, go to terminal and enter `node app.js` and you will see the output of code in app.js. Go [here](https://nodejs.org/about/) to get the snippet to create a bare minimum server.
- Go to `127.0.01:3000` or `localhost:3000` to see the server in action.

## 02_05 Express Setup and Basic Routes

- Ref: **ejs_webserver/**
- Make sure you are in ejs_webserver/ directory and run the command `npm install express --save`, **--save** to add it to the package.json as a dependency.
- It will also create node_modules folder where the application lives. You will see a lot of other stuff as well as Express has a lot of dependencies. Very rarely you will have to touch anything in **node_modules** folder.
- Ref: **app_basic.js** but rename it to **app.js**, to see and run the code used to create server using Express.
- You may also use `node app` to run the server.
- If you open up Dev Tools by pressing F12 and under Network >> Headers tab you will be able to see **200 OK** request or **304 Not Modified** status. Notice how we didn't define it in app.js even then it is there.

![](https://i.imgur.com/Igv7vNW.png)

## 02_06 Serving Static HTML Files

- Ref: **ejs_webserver/app.js**
- Install module **nodemon**, if you do not want to reload the server again and again, this module will monitor our files and if we change those, it reloads the server for us.,
- We use `npm install -g nodemon` to install nodemon and -g flag installs it globally so that we can use nodemon from any other projects too.
- Now run the project by just calling `nodemon`. It will monitor and reload whenever changes are notices in entrypoint js file. You will get an output similar to this:

```bash
❯ nodemon
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Server started on port 3000...
```

- We can add any file we want inside static page now to be displayed on the page. We add `about.html` and on going to `localhost:3000/about.html`, we see the contents of the webpage.

- Now to create a basic website go to [getbootstrap](http://getbootstrap.com/) >> Download >> Paste `css`, `fonts` and `js` into the static folder.

- Get rid of everything except `bootstrap.css` and `bootstrap.js`

- Go to [this](https://getbootstrap.com/docs/3.4/examples/starter-template/) link and hit `Ctrl+U` and copy the following line

```
<nav class="navbar navbar-inverse navbar-fixed-top">...
```

- Change Project Name and tags `#` in about to `about.html`

## 02_07 Serving JSON Downloads Handling POST

- Ref: `app.get('/stadiums')` in `app.js`.
- Now we see how to serve JSON content, which is used in making a RESTful API.
- To serve or allow users to download pdf files, create a folder called downloads in `ejs_webserver` directory and we place in it an empty `pdf.pdf` file. Next, we create a route for user in app.js. Ref: `app.get('/download')` in `app.js`.
- Post request to get user entered data. We make a form in `index.html`. And `app.post('/subscribe')` in `app.js`.
- As we do not have a database, we will grab the name and the email field and to do that we have to install a module called `body-parser`, so we run `npm install body-parser --save`.
