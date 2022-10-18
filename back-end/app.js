const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
var bodyParser = require('body-parser');

const url = "mongodb://localhost/iMDB"
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

app.listen(9000, () => {
    console.log("Server started!!");
})