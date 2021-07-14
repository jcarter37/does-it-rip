const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    description: String,
    rating: { 
        type: Number,
        min: 1,
        max: 10,
        default: 10
    },
    recommend: {type: Boolean},
    date: {
        type: Number,
        default: function () {
            return new Date().getFullYear();
        }
    }
})


const snowboardSchema = new Schema ({
    name: { 
        type: String,
        required: true
    },
    releaseYear: { 
        type: Number,
        min: 2010,
        max: 2021,
        required: true,
    },
    price: { 
        type: String,
        match: /[$][125.99-999.99]\d?/,
        required: true
    },
    size: {
        type: Number,
        min: 80,
        max: 163,
        required: true
    },
    type: { 
        type: String,
        enum: ['All Mountain', 'Free Ride', 'Park/Freestyle', 'Powder'],
        default: 'All Mountain'

    },
    shape: { 
        type: String,
        enum: ['True Twin', 'Directional Twin', 'Directional', 'Asymmetrical'],
        default: 'True Twin'
    },
    flex: { 
        type: String,
        enum: ['Soft', 'Medium', 'Stiff'],
        default: 'Medium'
    },
    abilityLevel: { 
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Intermediate'
    },
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Snowboard', snowboardSchema);