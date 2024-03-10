const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email address']
    },
    mobileNumber: {
        type: Number,
        required: [true, 'Please provide your mobile number']
    },
    message: {
        type: String,
        required: [true, 'Please provide your message']
    }
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;