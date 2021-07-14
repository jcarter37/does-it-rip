const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/snowboards/:id/reviews', reviewsCtrl.create);
router.put('/reviews/:id', reviewsCtrl.update);

module.exports = router;