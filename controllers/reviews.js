const Snowboard = require('../models/snowboard');

module.exports = {
    create,
    update
}

function create(req, res) {
    Snowboard.findById(req.params.id, function (err, snowboard) {
        snowboard.reviews.push(req.body);
        snowboard.save(function(err) {
            res.redirect(`/snowboards/${snowboard._id}`)
        });
    });
}

function update(req, res) {
    Snowboard.findOne({'reviews._id': req.params.id}, function(err, snowboard) {
        const review = snowboard.reviews.id(req.params.id);
        review.text = req.body.text;
        Object.assign(review, req.body)
        snowboard.save(function(err) {
            res.redirect(`/snowboards/${snowboard._id}`)
        });
    });
}

