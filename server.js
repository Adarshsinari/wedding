const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const { engine } = require('express-handlebars')
const layout_data = require('./public/assets/json/layout_data.json');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.locals.data = layout_data;
app.use(express.static('public'));

// route: Get '/'
app.get('/', (req, res) => {
  res.render('users/index');
})

// route: Get '/services'
app.get('/services', (req, res) => {
  res.render('users/services');
})

// route: Get '/projects'
app.get('/projects', (req, res) => {
  res.render('users/projects');
})

// route: Get '/contact'
app.get('/contact', (req, res) => {
  res.render('users/contact');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})