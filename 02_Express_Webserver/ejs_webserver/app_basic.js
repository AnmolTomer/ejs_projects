const express = require("express"); // Importing a node module

const app = express(); // Since we have express variable, create a variable app and set it to express() function

app.get("/", function (req, res) {
    // We are creating route for get request on address /
    res.send("<h1>Hello World🎆🎇✨🎉🎊🎊</h1>");
    console.log("User on home page.");
});

app.get("/about", (req, res) => {
    // We are creating route for get request on address /about using arrow notation
    res.send("<h1>I am a Madridsta!⚽🏳🤍</h1>");
    console.log("User on about page.");
});

// To send parameters we do :param_name in path and then req.params.param_name to get access to that variable
app.get("/users/:name", (req, res) => {
    let name = req.params.name;
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    res.send("<h1>Welcome to the site " + nameCapitalized + "!</h1>")
    console.log("User on name page.");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});