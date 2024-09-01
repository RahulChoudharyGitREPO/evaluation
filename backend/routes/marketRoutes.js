const express = require('express');
const { getMarketData, getMarketSummary } = require('../controllers/marketController');

const router = express.Router();

router.get('/data', getMarketData);
router.get('/summary', getMarketSummary);

module.exports = router;
