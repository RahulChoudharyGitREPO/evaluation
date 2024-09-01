const Order = require('../models/Order');
const Transaction = require('../models/Transaction');
const Stock = require('../models/Stock');

exports.matchOrders = async (order) => {
    try {
        const { stock, price, quantity, type } = order;
        let match;

        if (type === 'buy') {
            match = await Order.findOne({
                stock,
                price: { $lte: price },
                quantity: { $gte: quantity },
                type: 'sell',
                status: 'open',
            });
        } else {
            match = await Order.findOne({
                stock,
                price: { $gte: price },
                quantity: { $gte: quantity },
                type: 'buy',
                status: 'open',
            });
        }

        if (match) {
            const transactionQuantity = Math.min(quantity, match.quantity);
            const transactionPrice = match.price;

            await Transaction.create({
                stock,
                buyer: type === 'buy' ? order.user : match.user,
                seller: type === 'sell' ? order.user : match.user,
                quantity: transactionQuantity,
                price: transactionPrice,
            });

            order.quantity -= transactionQuantity;
            match.quantity -= transactionQuantity;

            if (order.quantity === 0) order.status = 'fulfilled';
            if (match.quantity === 0) match.status = 'fulfilled';
            await order.save();
            await match.save();
            await Stock.findByIdAndUpdate(stock, { lastTradedPrice: transactionPrice });
            if (order.quantity > 0) await matchOrders(order);
        }
    } catch (error) {
        console.error(error);
    }
};
