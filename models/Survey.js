const mongoose = require ('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema ({
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'User' }, //this is a relationship property to identify who the survey belongs to.
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);