var express = require('express');
var router = express.Router();
const snowboardsCtrl = require('../controllers/snowboards')

/* GET users listing. */
router.get('/', snowboardsCtrl.index);
router.get('/new', snowboardsCtrl.new);
router.get('/:id', snowboardsCtrl.show);
router.post('/', snowboardsCtrl.create);
router.delete('/:id', snowboardsCtrl.delete);

module.exports = router;
