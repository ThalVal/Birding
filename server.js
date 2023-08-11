const express = require('express');
const routes = require('./controllers');
const exphbs = require("express-handlebars")
const path = require("path")
const {User, Bird} = require('./models');
const sequelize = require('./config/connection');

//deploying again
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
// force true ONCE to reubuild tables if you change anything in the db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT' + PORT));
});
