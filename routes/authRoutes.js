//import the general npm passport module (not refering to passport.js config)
const passport = require('passport');

module.exports = (app) => {
    //Google authentication route handle #1
    app.get(
        '/auth/google', //path name
        passport.authenticate('google',{scope: ['profile','email']}) // code to execute when the above path is accessed
    );

    //Google authentication route handler #2
    app.get(
        '/auth/google/callback', //path name
        passport.authenticate('google') //code to execute when the above path is accessed
    );
    
    //route handler #3
    app.get('/api/logout',  (req, res) => {
        req.logout();
        res.send(req.user); // a function from passport
     });
    
    //route handler #4
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        // res.send(req.sesstion);
    });
};