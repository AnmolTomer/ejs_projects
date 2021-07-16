const express = require('express')
const router = express.Router()

Category = require('../models/category')
Article = require('../models/article')

// - - - - - - - - - - - - - - - - - - - Articles Routes- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

router.get('/articles', (req, res, next) => {
    Article.getArticles((err, articles) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        res.render('manage_articles', {
            title: 'Manage Articles',
            articles: articles
        })
    })

})

// Add articles
router.get('/articles/add', (req, res, next) => {
    Category.getCategories((err, categories) => { // Category to shown in drop down to choose category of article
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

// Edit Article Page - GET

router.get('/articles/edit/:id', (req, res, next) => {
    Article.getArticleById(req.params.id, (err, article) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        Category.getCategories((err, categories) => {
            res.render('edit_article', {
                title: 'Edit Article',
                article: article,
                categories: categories
            })
        })
    })

})

// - - - - - - - - - - - - - - - - - - - Categories Routes- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

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

// Add categories
router.get('/categories/add', (req, res, next) => {
    res.render('add_category', {
        title: 'Add Category'
    })
})

// Edit Category Page - GET

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