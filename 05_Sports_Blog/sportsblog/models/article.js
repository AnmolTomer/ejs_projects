const mongoose = require('mongoose')

// Article Schema - Title, Subtitle, Category, Body, Author, Created_At

const articleSchema = mongoose.Schema({
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    category: {
        type: String
    },
    body: {
        type: String
    },
    author: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    comments: [{
        comment_subject: {
            type: String
        },
        comment_body: {
            type: String
        },
        comment_author: {
            type: String
        },
        comment_email: {
            type: String
        },
        comment_date: {
            type: String
        }

    }]
})




// Article will allow access outside the file.
const Article = module.exports = mongoose.model('Article', articleSchema);

// We try to keep everything encapsulated inside the module.

module.exports.getArticles = function (callback, limit) {
    Article.find(callback).limit(limit).sort([
        ['title', 'ascending']
    ])
}

// Add Article

module.exports.addArticle = function (article, callback) {
    Article.create(article, callback)
}

// Get Article By Category

module.exports.getCategoryArticles = function (categoryId, callback) {
    let query = {
        category: categoryId
    }
    Article.find(query, callback).sort([
        ['title', 'ascending']
    ])
}

// Get Single Article by its ID

module.exports.getArticleById = function (id, callback) { // We can directly do callById outside as well, but we are sticking to encapsulating stuff
    Article.findById(id, callback) // Mongoose method
}


// Update Article
module.exports.updateArticle = function (query, update, options, callback) {
    Article.findOneAndUpdate(query, update, options, callback)
}

// Remove article

module.exports.removeArticle = function (query, callback) {
    Article.deleteOne(query, callback)
}