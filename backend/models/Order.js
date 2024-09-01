const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['buy', 'sell'], required: true },
    status: { type: String, enum: ['open', 'fulfilled', 'partial'], default: 'open' },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
