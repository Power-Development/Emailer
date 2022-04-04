//keys.js - figure out what set of credentials to return.

if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    require ('./prod');
    module.exports('./prod');
    //the above two statements can also be wrttien as >>> module.exports = require('./prod')
} else {
    // we are in development - return the dev keys
    require ('./dev');
    module.exports('./dev');
}