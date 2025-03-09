const express = require('express');
const cors = require('cors');
// const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/",contactRoutes)
// Create a transporter for sending emails


// Contact form endpoint

mongoose.connect(process.env.MONGO)
.then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});
