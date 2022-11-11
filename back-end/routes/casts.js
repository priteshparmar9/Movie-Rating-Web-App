const express = require('express');
const router = express.Router();

const Cast = require('../models/cast');

router.post('/addCast', async(req, res)=>{

    //String to date conversion of DOB
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
        const casts = await Cast.find(
            {
                // "name": "Daniel Radcliffe",
                // "name": "Emma Watson",
            }
        );
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.send(casts);
    }
    catch(error){
        res.send("Error : " + error);
    }
})

router.get('/name/:id', async (req, res)=>{
    try{
        const cast = await Cast.findById(req.params.id);
        res.send(cast.name);
    }
    catch(error){
        res.send("Error 1: " + error);
    }
})
router.get('/:id', async (req, res)=>{
    try{
        const cast = await Cast.find(
            {
                _id: req.params.id,
            }
        );
        // var myJsonString = JSON.stringify(movies);
        // res.
        res.json(cast);
    }
    catch(error){
        // res.status(200);
        // res.sendStatus(200);
        res.send(error);
    }
})


module.exports = router;