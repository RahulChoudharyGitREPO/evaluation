const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock', required: true },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    transactionDate: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
