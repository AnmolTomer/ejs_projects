const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/passportapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const bcrypt = require('bcryptjs')

// user schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    username: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },

})

// Create var called user and set it to module.exports

const User = module.exports = mongoose.model('User', userSchema)

module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                console.log(err)
            }
            newUser.password = hash
            newUser.save(callback)
        })
    })
}

module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username: username
    }
    User.findOne(query, callback)
}


//  Getting user by Id
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback)
}

// Compare password, take the password passed in and compare the hash of saved and input
// We use bcrypt to check the hash

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch)
    })
}