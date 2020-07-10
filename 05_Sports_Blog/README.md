# Sports Blog

>## Sports Blog Demo

## 05_01 Project Intro

- We will create a Sports Blog with full CRUD functionality. We will use mongoose this time around. It is another method of connecting to MongoDB, and is more advanced than standard MongoDB driver which we used in last project of TODO App. It's more efficient, advanced and sort of more intuitive to connect to NoSQL DB.
- Functionality also includes visitors being able to post comments on every blog post.
- We have category sort available as well on blog. Where users can sort as per their choice.
- Admin features such as being able to add and remove categories along with notification messages whenever there is some edit done.
- Same functionality available to manage articles also available.
- Use of data and time formatter to present Data, Time in a more clean manner.
- Form validation as well.

## Tools/Technologies Used

- Mongoose ODM (Object Document Mapper) - Models & Schemas
- Multiple Collections (articles and categories)
- Express Messages & Validator, Sessions
- Working with advanced Pug Layouts
- Express Router

## 05_02 Mongoose ODM (Object Document Mapper)

- **Mongoose**: A more powerful way to work with Node and MongoDB. ODM is similar to an Object Relational Mapper which we get in relational databases.
- It is an elegant object modelling package for Node and allows us to easily create CRUD apps.
- Mongoose also includes things like type casting, validation, query building, hooks, etc.
- Mongoose uses models to represent documents that can be saved and fetched from the database.
- Mongoose models must have a schema, which is used to define attributes for documents. 
- Methods can also be defined on mongoose schemas.
- **Allowed Schema Types**: String, Number, Data, Buffer, Boolean, Mixed, ObjectID, Array.

## 05_03 App Middleware Setup

- We will proceed in same manner as we did for **PC Repair** website such as using external routing files, Pug template engine, but this time we won't use express generator, rather we will set everything up from scratch and create our own app.js file as this gives us less limitations and more flexibility while setting up our project.
- We have a lot more dependencies for this app. So instead of doing npm install --save, we will directly put all of our requirements in package.json file so that we can just run npm install and it will set it up everything in one go.

- See the docs for express-messages and validator on these links: [Validator](https://express-validator.github.io/docs/), [messages](https://github.com/visionmedia/express-messages)

## 05_04 Routes, Views and Bower

- Create views and routes directory and corresponding files for index, articles, categories and manage. Go to app.js and define the routes.
- Next go to index.js and write code for routing on index, articles, categories and manage. Go to `localhost:5000/` and check for 3 routes we just defined and then we go to manage route to add functionality for adding post to a blog.
- Next after you define path to render view, create the view for adding article.
- If facing any issues do a `npm install pug@2.0.0-beta6`.
- Do the same for adding categories, i.e. update manage.js and create add_category.pug in views directory.
- Next we specify bower path using .bowerrc and after that we install bower in public directory. Add bootstrap.
- Next we add content and functionality for each view. Create a new file, index.pug in views.
- Define routes inside articles.js to render views for category, individual articles and collection of all articles.
- Next we move to `categories.js` set 'categories' to render, and we do same for other routes as well.

## 05_05 Fetching Categories and Working with Mongoose

- Create db and add categories using the following

```
use sportsblog
db.createCollection('categories')
db.createCollection('articles')
db.categories.insert({title:'Baseball','description':'These are baseball articles.'})
db.categories.insert({title:'Basketball','description':'These are Basketball articles.'})
db.categories.insert({title:'Football','description':'These are Football articles.'})
db.categories.insert({title:'Cricket','description':'These are Cricket articles.'})
db.categories.find()
```
- Now we have 4 categories in our DB, next want to fetch these categories using Mongoose. In Mongoose we deal with models, create a directory called models and inside it create a file called `category.js`. We try keeping everything encapsulated inside module.
- To connect to mongoose, we go to app.js and define the required methods. After doing mongoose.connection go to `routes/categories.js` and bring up Category model. Now on visiting localhost:5000/categories you would see all the categories and description in the console. Next we want to take those categories and pass them into our template of categories page.
- Next we work on implementing functionality for `/manage/categories/add` route using a form we would be able to add new categories.

## 05_06 Add and Manage Categories

- We are working on `/manage/categories/add` now. Goal is to create a form where we can take the Sport Name and Description and add it to categories collection in our DB.
- In `add_category.pug` we create a form and then make a post request, we receive contents of that form, put them into an object and pass that object to the mongoose client to be added to the DB. Remember while working with pug, it follows indentation opposed to angular brackets <> html approach.
- Get the contents from input and text area using bodyParser in add_category.pug and add it to categories.js.
- Next we define a model function called addCategory that will take an object and add it to categories collection. Define it in the `models/categories.js`. When this is done, go to categories.js and call addCategory on the object.
- Next we try to do manage categories and it will be table of different categories, for that we go to manage.js inside routes dir. Bring in Category model in manage.js and inside get route of /categories render the manage_categories template after passing categories to the manage_categories page.
- After that go to views/manage_categories.pug and similar to categories.pug we take the categories received from manage/categories.js and iterate over it and print a list.
- We set bootstrap stuff up next. Go to manage_categories.pug, categories.pug and add_category.pug to add container and use bootstrap classes to make the forms look good.
- Next on going to /categories and clicking any category we might want to edit that particular category. We do that next.

## 05_07 Edit and Delete Categories

- So far we can read all of our categories on blog inside /manage/categories area, andd categories on /manage/categories/add route. Now we want to edit our categories.
- We made a button for edit on `/manage/categories/edit` previously, next we add a form to edit category on route `/manage/categories/edit/:_id`. Go to manage.js and work on that route.
- Before doing so go to `models/category.js` create a function called getSingleCategory by id. After doing that, back to manage.js and in there use the Category model imported at the top of the manage.js file to get ID and pass it to the function `getCategoryById` which we made in `models/category.js`
- We pass the category object to edit_category.pug so let's go to pug file and make sure that form is present similar to add_category on the page.
- Now we want to save the Category info that we edit, for that go to routes/categories.js, use the Category object to call the updateCategory function defined in `models/category.js` and with that we can update contents of a category.
- Last thing we want to do with categories is being able to delete them, so inside the `/manage/categories/edit/:id` page we can put up a `Delete` button. Go to `edit_category.pug` to do that.

- Create a folder js inside public and main.js inside js folder. Include the script in layout.pug. Also include the jQuery.js. Go to main.js and there we have ajax request of type DELETE.
- Go to categories.js and write code for delete request using router.delete() and create a function removeCategory in category.js which will be called inside router.delete().
- With this we have full CRUD functionality for categories. Next we add a button to add category on `/manage/categories route`. Go to `manage_categories.pug` to do that.