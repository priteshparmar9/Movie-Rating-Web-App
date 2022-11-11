const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    genre:{
        type:Array,
    },
    writer:{
        type: String,
        required: true,
    },
    duration:{
        type: String,
        required: true,
    },
    type:{
        type:String,
        required: true,
    },
    director:{
        type: String,
        required: true,
    },
    cast:{
        type:Array,
        required: true,
    },
    poster:{
        type: String,
        required: true,
    },
    trailer:{
        type: String,
    },
    description:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('movie', movieSchema);