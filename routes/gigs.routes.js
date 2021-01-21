const express = require('express');
const router = express.Router();
const gigs = require('../controllers/gigs.controllers');

// get all gigs
router.get('/', gigs.findAll);

// create new gig
router.post('/', gigs.create);

module.exports = router;