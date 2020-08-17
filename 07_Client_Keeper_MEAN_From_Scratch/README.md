# Client Keeper App

> MEAN Stack Application from Scratch

- **MEAN** stands for MongoDB, Express, Angular and NodeJS.
- **Angular** is a front-end client side framework. We will build front-end in Angular
- **Backend and API**: Node + Express.
- It is a client management app with CRUD operations.
- We will be using Angular2. App is simple but from a beginner's POV, it's pretty good from a learning perspective.
- We will develop Angular front-end separately, we will be introduced to Angular-CLI, mongoJS for our ORM to communicate with MongoDB.

## Project Topics

- **Backend REST API** - Node+Express for GET,POST, DELETE requests.
- **MongoJS** ORM/ODM: Much easier than mongoose.
- **Angular2 Frontend**:
- **Components,Services, HTTP Module**: Services to make our requests.
- Separte **Front/Back End**: During development backend was developed first on port 3000 and then we will use **ng-cli** separately to compile it and bring it to public directory of our express app.

---

## Angular 2 Overview

- It is a fully featured JavaScript based front-end framework.
- Built and Maintained by **Google**.
- Used to make desktop, web and mobile web applications.
- Uses TypeScript language. (TypeScript) is a superset of JS. It is JS+ some other helpful features that helps us to write more reliable code. TS includes static typing, classes, ES6 standards, along with decorators and a bunch of other features.
- Much different than AngularJS / Angular1. There are more controllers, everything is a component.

---

## What the Core Angular2 Package Offers

- **Routing**
- **HTTP Module** - Get, Post, Put, Delete Requests, to make requests to our API.
- **Rxjs / Observables**- Reactive extensions. Includes observables which are basically streams of data in a fashion.
- **Dynamic Templates**- ng-if, loops and variables to be placed on web interfaces.
- **Event System**
- **LifeCycle Hooks**- To enable us to hook into different parts of loading process and run certain functions.
- **Testing** - Extensive availability and many more features.

---

## Components

- Treat everything as a component. Everything in angular is a component or a service.
- Encapsulates functionality.
- In the example below, we import the **Component package** from **angular/core**, @symbol is a decorator.
- '@' decorator takes in some metadata, the selector will be **my-app** in this case and this will be the actual HTML component that we create, which links to this element. **templateUrl** tells it where do we want our markup to be and in which file. After that we have class AppComponent, we can define properties such as name to cast them. We have a constructor and then we have a function to console.log whatever is in name property.

```js
import { Component } from "@angular/core";

@Component({
  selector: "my-app",

  templateUrl: "app.component.html",
})
export class AppComponent {
  name: String;

  constructor() {
    this.name = "John Doe";
  }

  sayHi() {
    console.log(this.name);
  }
}
```

---

## Services

- These can be used to make external API requests, services are good for anything we want accessible from all components or from multiple components.

## Angular CLI - **ng**

- Tool to generate a boiler plate application. It's a CLI interface.
- Run dev server.
- Compiler Project.

- `npm install -g angular-cli` to install it.
- `ng new myapp` - To build a app.
- `ng server` - Run development server.
- `ng build` - To compile our project. We generate the app on dev server while we are working on it and then we compile it to HTML and JS and then we add it to a public folder, the backend. That way, we will have our frontend running on the same port as our backend.

---

## 01. Create the Server File

- We start with working on backend of our application. We will build a RESTful API and we would want to be able to serve clients from MongoDB, we'd want to accept all kinds of necessary requests. Create clientKeeper directory. Do the usual npm init.

- Use RestEasy chrome app for making requests on our `/api/clients` route.
- Go to RestEasy app in chrome://apps and to make a request we use the following format:
- On making a get request we get nothing as collection clients is empty at the start of the project. To add something we do a post request on the same route.
- After post we do get again to verify if it was updated.

- Empty - Verified using GET Req
  ![](https://i.imgur.com/w66YBEB.png)

- Post Req

![](https://i.imgur.com/SBQarEx.png)

- Not Empty - Verified by visiting /api/clients

![](https://i.imgur.com/ilQiiV7.png)

- As DB connection on route works fine, we move towards fetching and posting clients.
- MongoJS truly has the easiest syntax to work with compared to mongoose and other options. Super close to standard MongoDB syntax. Insert the stuff you get from the form in the `.insert()` above. in our `/api/clients` route's POST request.
- After defining a put request path with ability to take object `_id` as query we send an update from RestEasy after copying the objectId in the following manner:

![](https://i.imgur.com/JGuIn9J.png)

- To verify we visit back the page and we see name from `John Doe` to `John Singh`.

![](https://i.imgur.com/0dKhsoJ.png)

- Delete route defined for delete. Operates on `/api/clients/:id` like post as well. Above is before we delete Karim Benzema entry, below you see request to delete being sent and removed.

![](https://i.imgur.com/wIvrUH9.png)

- So now we have a REST API with complete CRUD functionality. Now we move on towards front-end side of things i.e. Angular-2 app. We will work on front-end in a different directory altogether using ng-cli and when we are done we will compile it and we will move it over to public folder we have.

---

## 02. Angular 2 App Client Component

- Now we build our Ng-2 front end app. We will build it up in a separate directory and in the end we will compile the app and add it in express directory.
- Go to `ejs_projects` directory and install angular using `npm install -g angular-cli` to install the cli globally.
- After that we do `ng new ck-frontend`, creates a folder of the name ck-frontend, cd into the newly created folder & we can do `ng serve` to put serve app.
- Once we are done we can do ng-build it will create a dist folder with all the files which are ready to be brought into public directory.
- After `ng-serve` we get the following and app starts running on `localhost:4200`

![](https://i.imgur.com/Z0XqUKB.png)

- App in browser

![](https://i.imgur.com/8wr9jLf.png)

- In ck-frontend everything we will be working on, will be in `source/app` folder. There are 2 main files, we work with `app.component.ts` this is the core app component app. We build our own app components and we can bring those in this file. We also have `app.module.ts`, this is where if we build another component, and we want to import it and add it to declarations. To use a service we import it here. This is meeting place for all of our components, modules and services.

- We create our clients component now, which includes list of clients and our add and edit form. We could put our forms in a separate component to keep things simple, we keep everything in clients component. Other component will just be a simple nav-bar.

- Created a new folder called components in the app folder. For every component you create, put it in the components directory with a folder of name same as component name.

```ts
import { Component } from "@angular/core";

@Component({
  // Decorator
  selector: "clients", // Selector
  templateUrl: "./clients.component.html",
})
export class ClientsComponent {
  title = "app works!";
}

```
- Once we have the `clients` component inside the `src/app/components` directory we have to bring it inside the  app.module.ts file. So we import ClientsComponent from `./components/clients/clients.components.ts`
- Then we need to add ClientsComponents to the declarations of the app.module.ts.
- We go to `app.component.html` file and we bring in to our template `<clients></clients>` we keep the name as clients as inside the `clients.components.ts` file we have kept the `selector:'clients'` 
- Next inside the `./components/clients/clients.components.html` file is created. Write whatever in this, and now on going to `localhost:4200` stuff inside clients.components.html is shown.

- In next section we go over making a service, we will use it to make a request to our backend and get a list of clients and output them on our front-end.

## 03. Client Service Fetch

- Now we want to make a request from front-end to back-end to get the clients. We'd need to have both `ng-serve` @4200 and `nodemon` @3000 running. Now we need to make requests to port 3000 on backend.
- We need to create a service. Under app folder create new folder called services. Create a file called client.service.ts.
- We make changes to client.service.ts and then to user service we have to import it in app.module.ts.
- Go to `clients.component.ts` and import the service there.
- We want  `getClient` service function to run immediately. We could put it in constructor but better way to do it is using `OnInit` method().
- Add the following to `server.js` to allow requests from localhost:4200 to backend@ localhost:3000.

```js
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
``` 
- Now we can see that objects are being returned to frontend from the mongoDB collections.
![](https://i.imgur.com/zvxQWqy.png)

- Next we take the response we are getting called clients inside clients.component.ts and we will assign it as a property to our component and we will access from template and loop through it to output each client.
- After that we do some bootstrap to make it look good.

## 04. List the clients on frontend

- Go to `clients.components.ts`, instead of just logging we will add it as a property to component.
- Go to the template `clients.component.html` and add the syntax to loop over elements present in clients property and add it to table.

```html
<table class="table table-striped">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Company</th>
      <th></th>  <!--Button -->
    </tr>
    <tr *ngFor="let client of clients">
      <td>{{client.first_name}}</td>
      <td>{{client.last_name}}</td>
      <td>{{client.email}}</td>
      <td>{{client.phone}}</td>
      <td>{{client.company}}</td>
      <td><a href="" class="btn btn-primary">Edit</a></td>
      <td><a href="" class="btn btn-danger">Delete</a></td>
    </tr>

</table>
``` 

- Next go to `index.html` and add the bootswatch theme of your choice I have used spacelab.
- Next we want navbar, so create a new components folder called navbar. Then copy stuff from clients.component.ts and remove useless stuff.
- Once you are done with `navbar.component.ts`, then we add it to `app.module.ts`, similar to `clients.component` and add it to declarations by name of `NavbarCompenent`.
- Go to template `app.component.html` and above clients we make a navbar place. For clients we wrap the container div to move it to middle.