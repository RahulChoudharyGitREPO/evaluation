const Order = require('../models/Order');
const { matchOrders } = require('../services/orderService');

exports.placeBuyOrder = async (req, res) => {
    try {
        const { stock, quantity, price } = req.body;
        const order = await Order.create({ stock, quantity, price, type: 'buy', user: req.user._id });
        await matchOrders(order);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.placeSellOrder = async (req, res) => {
    try {
        const { stock, quantity, price } = req.body;
        const order = await Order.create({ stock, quantity, price, type: 'sell', user: req.user._id });
        await matchOrders(order);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate('stock');
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
