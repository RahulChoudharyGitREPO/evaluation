const Stock = require('../models/Stock');

exports.addStock = async (req, res) => {
    try {
        const { name, symbol, initialPrice } = req.body;
        const stock = await Stock.create({ name, symbol, initialPrice });
        res.status(201).json(stock);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateStock = async (req, res) => {
    try {
        const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(stock);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteStock = async (req, res) => {
    try {
        await Stock.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Stock deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
