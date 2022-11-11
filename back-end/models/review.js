const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    username:
        {
            type: String,
            // type: reviewSchema.Types.objectId,
            // ref: 'user',
        }
    ,
    movie:
        {
            type: String,
            // type: reviewSchema.Types.objectId,
            // ref: 'movie',
        }
    ,
    rating:{
        type: Number,
    },
    review:{
        type: String,
    },
})

module.exports = mongoose.model('review',reviewSchema);