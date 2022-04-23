const express = require ('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes') // importing authRoutes
const keys = require('./config/keys');
const bodyParser = require ('body-parser');
require('./models/User')
//Becuase Passport.js does not return anything, it can be a require statement only
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
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
require('./routes/billingRoutes')(app);

if (process.env. NODE_ENV === 'production') {
    //Express will serve up production assests
    //like our main.js file or main.css file
    app.use(express.static ('client/build'));

    //Express will serve up the index.html file if it does not recognize the route. 
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve (__dirname, 'client', 'build', 'index.html' ));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);