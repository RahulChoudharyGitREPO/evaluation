const express = require('express');
const { protect, admin } = require('../middlewares/authMiddleware');
const { addStock, updateStock, deleteStock } = require('../controllers/stockController');

const router = express.Router();

router.post('/', protect, admin, addStock);
router.put('/:id', protect, admin, updateStock);
router.delete('/:id', protect, admin, deleteStock);

module.exports = router;
