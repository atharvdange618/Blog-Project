const Contact = require('../models/contact');
const flash = require('connect-flash');

module.exports = async (req, res) => {
    try {
        const { name, email, mobileNumber, message } = req.body;
        const contact = await Contact.create({ name, email, mobileNumber, message });
        req.flash('success', 'Message sent successfully!');
        res.render('/contact');
    } catch (error) {
        req.flash('error', 'Error sending message');
        res.redirect('/contact');
    }
};
