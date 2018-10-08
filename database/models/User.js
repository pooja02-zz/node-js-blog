const bcryptjs = require('bcryptjs')

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

  username: String,

  email: String,

  password: String

})

UserSchema.pre('save', function(next) {

  const user = this



  bcryptjs.hash(user.password, 10, function(error, encrypted) {

    user.password = encrypted

    next()

  })

})

const User = mongoose.model('User', UserSchema)

module.exports = User
