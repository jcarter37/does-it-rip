const Snowboard = require('../models/snowboard');

module.exports = {
    index,
    show,
    create,
    new: newBoard,
    delete: deleteBoard
}

function index(req, res) {
    Snowboard.find({}, function(err, snowboards) {
        res.render('snowboards/index', {title: 'All Snowboards', snowboards })
    });
}

function show(req, res) {
    Snowboard.findById(req.params.id, function (err, snowboard) {
        res.render('snowboards/show', { title: 'Snowboard Details', snowboard });
    });
}

function create(req, res) {
    const snowboard = new Snowboard(req.body);
    snowboard.save(function(err) {
        if (err) return res.redirect('/snowboards/new');
        res.redirect('/snowboards')
    })
}

function newBoard(req, res) {
    res.render('snowboards/new', { title: 'New Snowboard'})
}

function deleteBoard(req, res) {
    Snowboard.findByIdAndDelete(req.params.id, function(err, deletedBoard) {
        if (err) console.log(err)
        res.redirect('/snowboards')
    });
}



