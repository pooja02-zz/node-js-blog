const path = require('path')

const expressEdge = require('express-edge')

const express = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const app = new express()

mongoose.connect('mongodb://localhost/node-js-blog')

app.use(express.static('public'))

app.use(expressEdge)

app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/posts/new', (req, res) => {
  res.render('create')
})

app.post('/posts/store', (req, res) => {

  console.log(req.body)

  res.redirect('/')

})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/post', (req, res) => {
  res.render('post')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(4000, () => {
  console.log('App listening on port 4000')

})
