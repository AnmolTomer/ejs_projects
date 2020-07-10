const express = require('express')
const router = express.Router()

Category = require('../models/category')

router.get('/articles', (req, res, next) => {
    res.render('manage_articles', {
        title: 'Manage Articles'
    })
})



router.get('/categories', (req, res, next) => {
    // res.render('manage_categories', {
    //     title: 'Manage Categories'
    // })
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
        res.render('manage_categories', {
            title: 'Categories',
            categories: categories // Now we use this inside manage_categories.pug template
        })
    })
})

// Add articles
router.get('/articles/add', (req, res, next) => {
    Category.getCategories((err, categories) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        res.render('add_article', {
            title: 'Add Article',
            categories: categories
        })
    })
}) // original path being /manage/articles/add as we are inside manage right now


// Add categories
router.get('/categories/add', (req, res, next) => {
    res.render('add_category', {
        title: 'Add Category'
    })
})

router.get('/articles/edit/:id', (req, res, next) => {
    res.render('edit_article', {
        title: 'Edit Article'
    })
})

router.get('/categories/edit/:id', (req, res, next) => {
    Category.getCategoryById(req.params.id, (err, category) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        res.render('edit_category', {
            title: 'Edit Category',
            category: category
        })
    })

})

module.exports = router