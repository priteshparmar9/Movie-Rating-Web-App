const express = require('express');
const review = require('../models/review');
const router = express.Router();

const Review = require('../models/review');

router.post('/', async (req, res) => {
    const review = new Review({
        username: req.body.username,
        movie: req.body.mov,
        rating: req.body.rating,
        review: req.body.review,
    });
    try {
        let rs = review.save();
        res.json('success');
    }
    catch (error) {
        res.json(error.message);
    }
})

router.get('/movId/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let rs = await review.find(
            {
                'movie': id
            }
        )
        let n = 0, sum = 0.0;
        for (let reviews in rs){
            n++;
            sum += parseInt(rs[reviews].rating);
        }
        if(n)sum/=n;
        rs.rating = n;
        // res.send(rs);
        res.json(
            {
                reviews: rs,
                rating: sum
            }
        )
    }
    catch (e) {
        res.send(e.message);
    }
})



module.exports = router;