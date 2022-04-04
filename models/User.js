const mongoose = require('mongoose');
const {Schema} = mongoose;
//Line 2 can also be written as --const Schema = mongoose.Schema;--

const userSchema = new Schema ({
    googleId: String,
});

mongoose.model('users',userSchema);