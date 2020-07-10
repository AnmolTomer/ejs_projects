const express = require('express')
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

    // Create a function in models to updateCategory

    Article.addArticle(article, (err, article) => {
        if (err) {
            console.log(err)
            res.send(err)
        }

        res.redirect('/manage/articles')
    })
})

module.exports = router