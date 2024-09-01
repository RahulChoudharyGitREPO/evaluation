const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true, unique: true },
    initialPrice: { type: Number, required: true },
    lastTradedPrice: { type: Number, default: null },
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;
