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
  const page_data = require('./public/assets/json/index_data.json');
  res.render('users/index',page_data);
})

// route: Get '/services'
app.get('/services', (req, res) => {
  const page_data = require('./public/assets/json/services_data.json');
  res.render('users/services',page_data);
})

// route: Get '/projects'
app.get('/projects', (req, res) => {
  const page_data = require('./public/assets/json/projects_data.json');
  res.render('users/projects',page_data);
})

// route: Get '/contact'
app.get('/contact', (req, res) => {
  const page_data = require('./public/assets/json/contact_data.json');
  res.render('users/contact',page_data);
})

// route: Get '/about'
app.get('/about', (req, res) => {
  const page_data = require('./public/assets/json/about_data.json');
  res.render('users/about',page_data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})