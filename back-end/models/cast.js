const mongoose = require('mongoose')
const CastSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    dob:{
        type: Date,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    },
})

module.exports = mongoose.model('cast', CastSchema);