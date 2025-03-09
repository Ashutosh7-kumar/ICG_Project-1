// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  userType:{
    type: String,
    enum: ['admin', 'user'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Login', contactSchema);

module.exports = Contact;
