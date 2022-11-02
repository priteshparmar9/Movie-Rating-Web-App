const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.post('/addmovie', async(req, res)=>{
    try{
        const movie = new Movie({
            title: req.body.title,
            genre: req.body.genre,
            writer: req.body.writer,
            director: req.body.director,
            cast: req.body.cast,
            poster: req.body.poster,
            trailer: req.body.trailer,
            description: req.body.description
        });
        const m1 = await movie.save();
        res.send(m1);
    }
    catch(error){
        res.send("Error : " + error);
    }
})

router.get('/', async (req, res)=>{
    try{
        const movies = await Movie.find();
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.json(movies);
    }
    catch(error){
        res.send("Error : " + error);
    }
})

router.get('/:id', async (req, res)=>{
    try{
        const movies = await Movie.find(
            {
                _id: req.params.id,
            }
        );
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.json(movies);
    }
    catch(error){
        // res.status(200);
        // res.sendStatus(200);
        res.send(error);
    }
})

module.exports = router;