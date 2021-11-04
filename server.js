//Basic server set up - Add more later

//Dependencies
const express = require('express');
const sequelize = require('./config/connection');
// our Routes and controllers
const reviewRoutes = require('./controllers/reviewRoute');
const homepageRoutes = require('./controllers/homepageRoutes');
const userRoutes = require('./controllers/userRoutes');
//session for authentication
const session = require("express-session");

// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');


const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(reviewRoutes);
app.use(homepageRoutes);
app.use(userRoutes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});