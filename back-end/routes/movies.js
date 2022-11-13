const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');
const Cast = require('../models/cast');

router.post('/addmovie', async (req, res) => {
    try {
        const movie = new Movie({
            title: req.body.title,
            genre: req.body.genre,
            duration: req.body.duration,
            writer: req.body.writer,
            director: req.body.director,
            cast: req.body.cast,
            poster: req.body.poster,
            trailer: req.body.trailer,
            type: req.body.type,
            description: req.body.description
        });
        const m1 = await movie.save();
        res.send(m1);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.get('/allmovies', async (req, res) => {
    try {
        const movies = await Movie.find({
            type: "Movie"
        });
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.json(movies);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.get('/allwebseries', async (req, res) => {
    try {
        const movies = await Movie.find(
            {
                type: "WebSeries"
            }
        );
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.json(movies);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.get('/castInMovie/:id', async (req, res) => {
    try {
        const movies = await Movie.find({
            cast: req.params.id
        });
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.json(movies);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.post('/castInMovie/', async (req, res) => {
    try {
        const movies = await Movie.find({
            cast: {
                id: req.body.id,
                name: req.body.name
            }
        });
        // var myJsonString = JSON.stringify(movies);
        // res.
        console.log(movies);
        res.json(movies);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.get('/genreMovie/:gen', async (req, res) => {
    try {
        const movies = await Movie.find({
            genre: req.params.gen
        });
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.json(movies);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})


router.get('/posters', async (req, res) => {
    try {
        const movies = await Movie.find();
        // var myJsonString = JSON.stringify(movies);
        // res.
        let arr = Array();
        for (movie in movies) {
            arr.push(movies[movie].poster);
        }
        console.log(arr);

        res.send(arr);
    }
    catch (error) {
        // res.status(200);
        // res.sendStatus(200);
        res.send(error);
    }
})

router.get('/test', async (req, res) => {
    try {
        const movies = await Movie.find();
    }
    catch (error) {
        res.send(error);
    }
})

router.get('/find/:query', async (req, res)=>{
    // let query = "/^" + req.params.query + "/i";
    let query = new RegExp(req.params.query, "i");
    // console.log(query);
    try {
        movies = await Movie.find(
            {
                title: {
                    $regex: query,
                }
            }
        )
        
        res.json( movies);
    }
    catch (error) {
        res.send(error);
    }

})

router.get('/:id', async (req, res) => {

    let cast, movies = null;
    let response = Array();



    try {
        movies = await Movie.find(
            {
                _id: req.params.id,
            }
        )
        
        
        // var myJsonString = JSON.stringify(movies);
        // res.
        
        res.json( movies
        );
    }
    catch (error) {
        // res.status(200);
        // res.sendStatus(200);
        res.send(error);
    }
})



module.exports = router;