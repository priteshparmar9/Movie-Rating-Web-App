const express = require('express');
const router = express.Router();

const Cast = require('../models/cast');


router.post('/addCast', async(req, res)=>{
    var parts = req.body.dob.split('-');
    var db = new Date(parts[0], parts[1] - 1, parts[2]);
    try{
        const cast = new Cast({
            name: req.body.name,
            dob:db,
            description:req.body.description,
            image:req.body.image,
        });
        const c1 = await cast.save();
        res.send(c1);
    }
    catch(error){
        res.send("Error : " + error);
    }
})

router.get('/', async (req, res)=>{
    try{
        const casts = await Cast.find();
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.send(casts);
    }
    catch(error){
        res.send("Error : " + error);
    }
})

module.exports = router;