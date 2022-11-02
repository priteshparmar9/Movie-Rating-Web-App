const express = require('express');
const review = require('../models/review');
const router = express.Router();

const Review = require('../models/review');

router.post('/', async (req, res) => {
    const review = new Review({
        username: req.body.username,
        mov: req.body.mov,
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
                'mov': id
            }
        )
        res.send(rs);
    }
    catch (e) {
        res.send(e.message);
    }
})



module.exports = router;