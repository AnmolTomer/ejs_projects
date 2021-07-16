const express = require('express');

const router= express.Router();

Category = require('../models/category')
Article = require('../models/article')
// route to manage articles - /manage/articles

router.get('/articles', (req,res,next) => {
    Article.getArticles((err, articles) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        res.render('manage_articles',{
            title: 'Manage Articles',
            articles: articles
        })
        console.log('-----------------------\n')
        console.log('User Visited Manage Articles Page 👷🧾')
    })        
})

// route to add article - /manage/articles/add

router.get('/articles/add',(req,res,next) =>{
    Category.getCategories((err, categories) => {
        if(err){
            console.log(err)
            res.send(err)
        }

        res.render('add_article',{
            title: 'Create Article 🖊🧾',
            categories: categories
    });
    console.log('-----------------------\n')
    console.log('User Visited Add Article Page 🖊🧾')
    })
    
})
// original path being /manage/articles/add as we are inside manage right now

// route to edit article - /manage/articles/edit/:id

router.get('/articles/edit/:id',(req,res,next) =>{
    Article.getArticleById(req.params.id, (err,article) => {
        if(err){
            console.log(err)
            res.send(err)
        }

        Category.getCategories((err, categories) => {
            res.render('edit_article', {
                title: 'Edit Article 🛠🧾',
                article: article,
                categories: categories
            })
        })
    })

    console.log('-----------------------\n')
    console.log('User Visited Edit Article Page 🛠🧾')    
})


// ---------------------------- categories path

// route to manage categories - /manage/categories
router.get('/categories', (req,res,next) => {
    Category.getCategories((err, categories) => {
        if(err){
            res.send(err)
        }
        
        // Print to console
        console.log("\n- - - - - - - - -\n")
        console.log('User Visited Manage Categories Page 👷🔎')
        console.log(categories)
        console.log("\n- - - - - - - - -\n")

        // Send to categories.pug
        res.render('manage_categories', {
            title: 'Categories',
            categories: categories // Now we use this inside categories.pug template
        });
        
        
    });
    console.log('-----------------------\n')
    
})

// route to add category - /manage/categories/add
router.get('/categories/add',(req,res,next) =>{
    res.render('add_category',{title: 'Create Category'});
    console.log('-----------------------\n')
    console.log('User Visited Add Category Page ➕🔎')
})

// route to edit category - /manage/categories/edit/:id
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
    console.log('-----------------------\n')
    console.log('User Visited Edit Category Page 🖊🔎')

})


module.exports = router;