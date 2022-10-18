const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    username:[
        {
            type: reviewSchema.Types.objectId,
            ref: 'user',
        }
    ]
})

module.exports = mongoose.model('review',reviewSchema);