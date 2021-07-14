const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); */

// Set static path

app.use(express.static(path.join(__dirname, "static")));
// Specify certain folder as static for express to use. Here we use __dirname to specify that in the same directory this app.js is use the folder called public.

app.get("/stadiums", (req, res) => {
  let stadium = [
    {
      full_name: "Estadio Santiago Bernabéu",
      last_name: "Estadio Real Madrid Club de Fútbol",
      location: "Chamartín, Madrid, Spain",
      capacity: 81066,
    },
    {
      full_name: "Camp Nou",
      last_name: "Camp Nou",
      location: "Barcelona, Catalonia, Spain",
      capacity: 99354,
    },
    {
      full_name: "Wembley Stadium",
      last_name: "British Empire Exhibition Stadium",
      location: "Wembley, London, England",
      capacity: 82000,
    },
  ];
  res.json(stadium); // On going to localhost:3000/stadiums json array appears
});

// To download a file on going to a specific address

app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "/downloads/pdf.pdf"));
  console.log("Downloaded File. ⚡✅🧾");
});

// To redirect the user to index.html when localhost:3000/index is entered.
app.get("/index", (req, res) => {
  res.redirect("/index.html");
});

app.get("/home", (req, res) => {
  res.redirect("/index.html");
});

app.get("/services", (req, res) => {
  res.redirect("/services.html");
});

app.get("/about", (req, res) => {
  res.redirect("/about.html");
});

// Post request to get user entered data.

app.post("/subscribe", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  console.log(
    name + " has subscribed to the Newsletter with the email " + email
  );
});

//  Print on console and listen to a specific port.

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
