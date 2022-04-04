const express = require ('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes') // importing authRoutes
const keys = require('./config/keys');

require('./models/User')
//Becuase Passport.js does not return anything, it can be a require statement only
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app); //exported app module from authRoutes.js
//can also be done as 
//require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);