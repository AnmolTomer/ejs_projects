# User Login System

## 00. Intro

- Here we implement access control, it is important as it is something required in all web apps most of the time and this can easily be implemented in all of the other projects that we will be doing.
- We will use Bootstrap theme, without logging in, access to Dashboard would be restricted. We work with sessions and alerts.
- We will use the **passport.js** module and password encryption.

## Project Topics:

- User Authentication
- Access Control
- Passport.js
- Local Strategy (Local username in DB)
- Express Validator and Messages
- Mongoose and MongoDB

---

## 01. Passport.js: An Overview

- We will build a user registration and log-in system using one of the most powerful modules for the task, i.e. passport.js.

> ## What is Passport ?

- Simple, unobtrusive authentication for Node.js.
- Can be dropped into almost any express app.
- Supports multiple authentication strategies, local along with social media sites to log in.

## Advantages of Passport

- 300+ Authentication Strategies
- Can be used with any database be it ORM or ODM.
- Easily handles succeess and failure.
- Supports persistent sessions.
- Lightweight code base. Keeps your app light and fast.
- Easily integrates Bcrypt, a popular encryption module.

## Authenticate in Passport

- Call `passport.authenticate` along with which log-in strategy you want to employ.
- By default, if auth fails, a 401 status will be returned.
- You can create additional handlers as well.

```js
app.post('/login',
    passport.authenticate('local'),
    function(req,res) {
        res.redirect('/users/'+req.user.username)
    });

app.post('/login', passport.authenticate('local',{
    successRedirect: '/', // Redirect path if success
    failureRedirect: '/login', // Redirect path if failed
    failureFlash: true // Flash message if fails.
})
```

## Strategies

- Strategies are used to authenticate requests.
- Ranges from verifying user/pass to delegated authentication using OAuth or federated auth using OpenID.

## Serialization

- Used to maintain a session
- Each request will contain a unique cookie, to identify the session.
- Passport will serialize and deserialize user instances to and from the session.

```js
passport.serialization((user, done) => {
  done(null, user.id);
});

passport.deserialization((id, done) => {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
```

---

## 02. App Setup with Handlebars Middleware

- Visit [here](http://www.passportjs.org/docs/) for the documentation of Passport.js.
- While doing validation, there are 2 kinds of validation that can be possible, backend and frontend. We validate user input with Node.js in backend validation, whereas when it comes to front end validation is activated in the browser using JS. It notifies the users when they have entered an incorrect piece of information into the data. This is great to improve UX but doesn't helps much to protect the app from malicious actors.
- If we use front end validation, malicious agents can directly disable the JS removing the validation entirely to be able to submit whatever they want, including malicious scripts. Backend validation protects you from these kind of attacks.
- That's why we follow this: Process Data on Backend >> Validate Backend Data >> Store Data in DB >> Hash User credentials > Validate Frontend data.
- More on using newer version of express validator [here](https://www.youtube.com/watch?v=WFHzlExDwrY)
