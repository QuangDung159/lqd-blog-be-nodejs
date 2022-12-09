// config dotenv
require('dotenv').config();

const { connectDB } = require('./configs/db');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');
const photoRoute = require('./routes/photoRoute');
const albumRoute = require('./routes/albumRoute');

connectDB();
const app = express();

// cors
app.use(cors());

// body parser
app.use(express.json());

// mount the route
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/post', postRoute);
app.use('/api/v1/photo', photoRoute);
app.use('/api/v1/album', albumRoute);

app.use('/', postRoute);

// unhandled routes
app.all('*', (req, res, next) => {
    const err = new Error('The route not found');
    err.statusCode = 404;

    // will trigger errorHandle function with param = err
    next(err);
});

app.use(errorHandler);

app.listen(5001, () => {
    console.log(`Server is running on port 5001`)
});