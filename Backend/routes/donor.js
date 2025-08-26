const express = require('express');
const { verifyTokenAndAuthorization } = require('../middlewares/verifyToken');
const {createDonor, getAllDonors, updateDonor, deleteDonor, getOneDonor, getDonorsStats} = require('../controllers/donor');
const router = express.Router();

//add donor
router.post('/',verifyTokenAndAuthorization, createDonor);

//get all donors
router.get('/', getAllDonors);

//update donor
router.put('/:id', updateDonor);

//get one donor
router.get('/find/:id', getOneDonor);

//delete donor
router.delete('/:id', deleteDonor);

//get donor stats
router.get('/stats', getDonorsStats);


module.exports = router;