# Sports Blog

>## Sports Blog Demo - Web View

![](demo.gif)


>## Mobile View

![](mobile.gif)


## 05_01 Project Intro

- We will create a Sports Blog with full CRUD functionality. We will use mongoose this time around. It is another method of connecting to MongoDB, and is more advanced than standard MongoDB driver which we used in last project of TODO App. It's more efficient, advanced and sort of more intuitive to connect to NoSQL DB.
- Functionality also includes visitors being able to post comments on every blog post.
- We have category sort available as well on blog. Where users can sort as per their choice.
- Admin features such as being able to add and remove categories along with notification messages whenever there is some edit done.
- Same functionality available to manage articles also available.
- Use of data and time formatter to present Data, Time in a more clean manner.
- Form validation as well.
- Run MongoDB in docker using `sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo`, visit [this](https://www.thachmai.info/2015/04/30/running-mongodb-container/) for detailed info.

- Or you can do this to remove related to mongoDB if you have any, I'd recommend Docker:

```
dpkg =l | grep mongo
sudo apt-get purge mongodb*
sudo service mongod stop
sudo apt-get purge mongodb-org*
sudo apt-get purge mongodb mongodb-clients mongodb-server mongodb-dev
sudo apt-get purge mongodb-10gen
sudo dpkg -P mongodb-server-core mongo-tools
REBOOT AND INSTALL AGAIN
sudo apt install mongodb
sudo service mongodb start
mongo
sudo service mongodb stop
 ```

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

## 05_08 Articles Model Add Articles

- Upto this point we were able to manage our categories, we have CRUD functionality and we have backend set for categories. Next we do the same thing for articles.
- First thing we do is in models create article.js to interact with DB for article related functionalities. Similar to category.js, just took that and made necessary changes wherever required, structure and functions are almost same.
- Now we start with create/add article page and route is `/manage/articles/add`, to do this go to manage.js `/articles/add` route is where we will add the functionality to add articles.
- On add articles page, we would have to select the category of the article which would come from categories collections of the DB. We make use of `getCategories` function defined in `category.js` to get those.
- Copy contents of add_category.pug into add_article.pug and edit it wherever needed as the basic body of form remains the same. Refer schema of article.js in models to see what all things you need to get from user.
- We are making a POST req to `/articles/add`, go to routes/articles.js and create a post request for `/add`. Similar to `router.post` of categories.
- Now that we can add articles, we move towards fetching articles from articles collection and showing them on `/manage/articles` route.

## 05_08 Manage Articles

- Now we display articles on the `/manage/articles` route. Go to manage.js and on the route `/articles`, use the getArticles function to get the desired functionality. After that edit `manage_articles.pug`.
- With this we are able to see our added articles, and add new articles using add button.

![](https://i.imgur.com/Q8qbbXp.png)

- Now we have to write code for `/manage/articles/edit` route and it will be similar to `/manage/categories/edit` route. Take the router.get of categories edit route and modify it as required for articles/edit in `manage.js` and same goes for edit_article.pug which will be similar to add_article.pug form.

![Edit Article View](https://i.imgur.com/99gtRx9.png)

- Now that we have edit article page with all the contents from DB being rendered now we need to define POST route for the form as in action we have the route `action='/articles/edit/'+article._id` in edit_article.pug. Go to routes/articles.js and handle post request from edit_article.pug form on Submission. Similar to `articles.js` /add route POST request but this will be on /edit/:id inside articles.js.
- Next inside manage/articles table we want to put author and date. We use moment for that.
- To enable delete option on route /articles/edit/:id we do AJAX request similar to delete category. Go to public/js/main.js edit it out and make a Delete button in edit_article.pug.

## 05_09 Express Validator

- Useful for form validation and express messages. In app.js we have included express-validator and middleware setup is also done. Deprecated, not used.
- Poor unorganized documentation and issues to quickly set up.

## 05_10 Messages

- To show a message we can see that in the route /manage/categories when we add something and do a res.redirect, before that we can send a flash message.  We can do so by entering the following `req.flash('Success', 'Added To Category')` after that we go to app.js and setup connect-flash and we use a variable globally called messages which we may use in our templates to show messages. So we should add the message in `/manage/categories/` route as that's where we will be redirected once we submit the request successfully. Make some changes to style.css and messages will work on your page.
- On adding articles also we want the same effect, so we go to articles.js and before the redirect request we do the same as we did for categories.
- With messages showing up on Add and Edit for category and articles we are done with admin side or things related to controlling the content on the site.

## 05_11 Navbar Showcase

- Now we move towards user side of things, i.e. the content being shown to user, nav bar and other things. Navbar will have homepage, articles, categories and manage pages.
- As we will have a dropdown for manage sections, so we need bootstrap.js for that. We will include it in layout.pug.

## 05_12 Comment Functionality

- We will create form on single article page and store the comments in an array. Ref: `views/article.pug`, define a new function inside models to get the comment related details in a form and pass it on as an object as per the article id into DB.

- Comment Functionality implemented.

![](https://i.imgur.com/4teV3Qa.png)

![](https://i.imgur.com/qZLFCL7.png)
