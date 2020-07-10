const express = require('express')
const {
    query
} = require('express')
const router = express.Router()

// Bring in Article model

Article = require('../models/article')

router.get('/', (req, res, next) => {
    res.render('articles', {
        title: 'Articles'
    })
})

router.get('/show/:id', (req, res, next) => {
    res.render('article', {
        title: 'Show Article'
    })
})

router.get('/category/:category_id', (req, res, next) => {
    res.render('articles', {
        title: 'Category Articles'
    })
})


// Add article - POST
router.post('/add', (req, res, next) => {
    let article = new Article()
    article.title = req.body.title
    article.subtitle = req.body.subtitle
    article.category = req.body.category
    article.body = req.body.body
    article.author = req.body.author

    // Create a function in models to addArticle

    Article.addArticle(article, (err, article) => {
        if (err) {
            console.log(err)
            res.send(err)
        }

        res.redirect('/manage/articles')
    })
})

// Edit Article - Post /manage/articles/post

router.post('/edit/:id', (req, res, next) => {
    let article = new Article()
    const query = {
        _id: req.params.id
    }
    const update = {
        title: req.body.title,
        subtitle: req.body.subtitle,
        category: req.body.category,
        author: req.body.author,
        body: req.body.body
    }

    // Create a function in models to updateCategory

    Article.updateArticle(query, update, {}, (err, article) => {
        if (err) {
            console.log(err)
            res.send(err)
        }

        res.redirect('/manage/articles')
    })
})

// Delete from /articles/edit/:id

router.delete('/delete/:id', (req, res, next) => {

    const query = {
        _id: req.params.id
    }

    // Create a function in models to updateCategory

    Article.removeArticle(query, (err, article) => {

        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log("\nRequest finished without any errors. Category deleted.")
        }
        // We do not redirect from here as we are doing it in the main.js, instead send status
        res.sendStatus(200)



    })
    // 
})

module.exports = router