const express = require('express');
// const serverless = require('serverless-http');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const url = "mongodb+srv://pritesh:BNgExd7PQmZjgvLH@cluster0.jis9bxg.mongodb.net/test";
const app = express();

const cors = require('cors');
app.use(cors());

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on('open', () => {
    console.log("Connection with Mongo Successful!!");
});

// app.use(express.json)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const userRouter = require('./routes/users');
app.use('/user', userRouter);

const movieRouter = require('./routes/movies');
app.use('/movie', movieRouter);

const castRouter = require('./routes/casts');
app.use('/cast', castRouter);

const reviewRouter = require('./routes/reviews');
app.use('/review', reviewRouter);

app.listen(process.env.PORT || 3000, () => {

    console.log( (process.env.PORT) + "Server started!!");
})

// module.exports.handler = serverless(app);