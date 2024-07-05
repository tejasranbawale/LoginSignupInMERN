// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer'); // Corrected typo

// const app = express();
// const port = 8000;
// const cors = require('cors');
// app.use(cors());

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// const jwt = require('jsonwebtoken');

// mongoose
//   .connect(
//     "mongodb+srv://tejasranbawale:Ram3@2015@cluster0.mongodb.net/ECOMMERCEAMAZOM?retryWrites=true&w=majority",
//     {},
//   )
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(err => {
//     console.log('Error while Connecting to MongoDB', err);
//   });

// app.listen(port, () => {
//   console.log('Server is running on port 8000');
// });



const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env file

const app = express();
const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error while Connecting to MongoDB', err);
  });

app.listen(port, () => {
  console.log('Server is running on port 8000');
});
