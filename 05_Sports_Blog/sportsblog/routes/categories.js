const express = require('express');
const { check, validationResult } = require('express-validator');
const router= express.Router();
const session = require('express-session')

// Import the exported models/category

Category = require('../models/category')

router.get('/', (req,res,next) => {
    // Call .getCategories() function inside models/category.js, takes a callback, error and passes back categories
    Category.getCategories((err, categories) => {
        if(err){
            res.send(err)
        }
        
        // Print to console
        console.log("\n- - - - - - - - -\n")
        console.log('User Visited Categories Page 🔎🔎')
        console.log(categories)
        console.log("\n- - - - - - - - -\n")

        // Send to categories.pug
        res.render('categories', {
            title: 'Categories',
            categories: categories // Now we use this inside categories.pug template
        });
        
        
    });
    
});



// Add category - POST REQ

router.post('/add',[
    // check() is a middleware used to validate
// the incoming data as per the fields

    check('title').not().isEmpty().withMessage('Title is required. Should be of length 4 minimum.'),
    check('description').not().isEmpty().withMessage('Description is required.')
    ],
    
    (req, res, next) => {

    // validationResult function checks whether
    // any occurs or not and return an object
    const errors = validationResult(req)

    console.log(errors)

    // If some error occurs, then this
    // block of code will run
    if (errors) {
        // const alert = errors.array()
        res.render('add_category',{
            // alert: alert,
            errors : errors.array(),
            
            title: 'Create Category'
        })
    }else {
        let category = new Category()
    category.title = req.body.title // Get the contents from input and text area with names title and description in add_category.pug
    category.description = req.body.description
    Category.addCategory(category, (err, category) => {
        if (err) {
            console.log(err)
            res.send(err)
        }

        // Flash message before redirecting
        req.flash('Success', 'Added To Category✔️')

        // Print to console
        console.log("\n- - - - - - - - -\n")
        console.log("User On Edit Categories Page: Added ✅➕:\n")
        console.log("Title: " + req.body.title)
        // console.log()
        console.log("Description: " + req.body.description)
        // console.log()
        console.log("\n- - - - - - - - -\n")

        // Redirect
        res.redirect('/manage/categories')
    })
    }
    
    // 
})

// Edit category - POST Request
router.post('/edit/:id', (req, res, next) => {
    let category = new Category()
    const query = {
        _id: req.params.id
    }
    // Create update variables
    const update = { // Pass this object to updateCategory function defined in models to update category in DB.
        title: req.body.title,
        description: req.body.description
    }
    
    // Create a function in models to updateCategory
    Category.updateCategory(query, update, {}, (err, category) => {
        if (err) {
            console.log(err)
            res.send(err)
        }

        // Print to console
        console.log("\n- - - - - - - - -\n")
        console.log("User On Edit Categories Page Added:\n")
        console.log("Title: " + req.body.title)
        // console.log()
        console.log("Description: " + req.body.description)
        // console.log()
        console.log("\n- - - - - - - - -\n")

        req.flash('Success', 'Category Updated Successfully✏️')
        // Redirect
        res.redirect('/manage/categories')
    })
})

// Delete Category - DELETE

router.delete('/delete/:id', (req, res, next) => {
    const query = {
        _id: req.params.id
    }
    // Create a function in models to updateCategory
    Category.removeCategory(query, (err, category) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log("\nRequest finished without any errors. Category deleted.")
        }
        // We do not redirect from here as we are doing it in the main.js using jquery, instead send status
        res.sendStatus(200)
    })
})




module.exports = router;