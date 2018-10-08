const bcryptjs = require('bcryptjs')

const User  = require('../database/models/User')

module.exports = (req, res) => {

  const { email, password } = req.body;

  User.findOne({ email }, (error, user) => {

    if(user) {

        bcryptjs.compare(password, user.password, (error, result) => {

          if (same) {

            res.redirect('/')

          } else {

            res.redirect('/auth/login')

          }

        })

    } else {

      return res.redirect('/auth/login')

    }

  })

}
