const express = require('express')
const router = express.Router()

Category = require('../models/category')

router.get('/', (req, res, next) => {
    Category.getCategories((err, categories) => {

        if (err) {
            console.log(err)
            res.send(err)
        }
        // Print to console
        console.log("\n- - - - - - - - -\n")
        console.log("User On Categories Page:\n")
        console.log(categories)
        console.log("\n- - - - - - - - -\n")

        // Send to categories.pug
        res.render('categories', {
            title: 'Categories',
            categories: categories // Now we use this inside categories.pug template
        })
    })

})

// route for new category form submit action

router.post('/add', (req, res, next) => {
    let category = new Category()
    category.title = req.body.title // Get the contents from input and text area with names title and description in add_category.pug
    category.description = req.body.description
    Category.addCategory(category, (err, category) => {
        if (err) {
            console.log(err)
            res.send(err)
        }

        // Print to console
        console.log("\n- - - - - - - - -\n")
        console.log("User On Edit Categories Page:\n")
        console.log("Title: " + req.body.title)
        // console.log()
        console.log("Description: " + req.body.description)
        // console.log()
        console.log("\n- - - - - - - - -\n")

        // Redirect
        res.redirect('/manage/categories')
    })
    // 
})



module.exports = router