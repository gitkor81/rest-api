// import the package
const express = require('express');

// execute this
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

// Mittlewares
app.use(bodyParser.json());

// for cross domain fetching
app.use(cors());

//middleware (executes functions)
//app.use('/posts', () => {
//   console.log('This is a middleware running')
//})

// import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// routes
app.get('/', (req,res) => {
    res.send('We are on home');
});

//Connecting DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected!'));

// how to we start the listening to the server
app.listen(3000);