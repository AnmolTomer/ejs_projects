// Contains all models related to category

// Bring in mongoose
const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    title: {type: String},
    description: {type:String}
})

// Allows access from outside when we export
const Category = module.exports = mongoose.model('Category',categorySchema)

// Functions that we can reference related to database can be kept here as well.

// Get Categories

module.exports.getCategories = function(callback,limit){
    Category.find(callback).limit(limit).sort([['title','ascending']]);
}

// Add category
module.exports.addCategory = function (category, callback) {
    Category.create(category, callback)
}

// Get Single Category by its ID
module.exports.getCategoryById = function (id, callback) { // We can directly do callById outside as well, but we are sticking to encapsulating stuff
    Category.findById(id, callback) // Mongoose method
}


// Update Category
module.exports.updateCategory = function (query, update, options, callback) {
    Category.findOneAndUpdate(query, update, options, callback)
}

// Remove category

module.exports.removeCategory = function (query, callback) {
    Category.deleteOne(query, callback)
}