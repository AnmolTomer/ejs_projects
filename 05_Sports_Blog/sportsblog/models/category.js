const mongoose = require('mongoose')

// Category Schema

const categorySchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
})

// Category will allow access outside the file.
const Category = module.exports = mongoose.model('Category', categorySchema);

// We try to keep everything encapsulated inside the module.

module.exports.getCategories = function (callback, limit) {
    Category.find(callback).limit(limit).sort([
        ['title', 'ascending']
    ])
}

// Add category

module.exports.addCategory = function (category, callback) {
    Category.create(category, callback)
}