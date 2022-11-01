const express = require('express');
const router = express.Router();

const Review = require('../models/review');

router.post('/', async (req,res) =>{
    const review = new Review({
        username: req.body.username,
        title: req.body.title,
        rating: req.body.rating,
        review: req.body.review,
    });
    try{
        let rs = review.save();
        res.json('success');
    }
    catch(error){
        res.json('Error: ' + error.message);
    }
    res.send("Hello");
})

module.exports = router;