const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { placeBuyOrder, placeSellOrder, getOrders } = require('../controllers/orderController');

const router = express.Router();

router.post('/buy', protect, placeBuyOrder);
router.post('/sell', protect, placeSellOrder);
router.get('/', protect, getOrders);

module.exports = router;
