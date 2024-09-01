const Stock = require('../models/Stock');

exports.getMarketData = async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.status(200).json(stocks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getMarketSummary = async (req, res) => {
    try {
        const activeStocks = await Transaction.aggregate([
            {
                $group: {
                    _id: "$stock",
                    totalVolume: { $sum: "$quantity" }
                }
            },
            {
                $sort: { totalVolume: -1 }
            },
            {
                $limit: 5
            }
        ]);

        const stocks = await Stock.find();
        let marketTrend = "stable";
        let trendCount = { up: 0, down: 0 };

        stocks.forEach(stock => {
            if (stock.lastTradedPrice > stock.openingPrice) {
                trendCount.up += 1;
            } else if (stock.lastTradedPrice < stock.openingPrice) {
                trendCount.down += 1;
            }
        });
        if (trendCount.up > trendCount.down) {
            marketTrend = "bullish";
        } else if (trendCount.down > trendCount.up) {
            marketTrend = "bearish";
        }
        res.status(200).json({
            mostActiveStocks: activeStocks,
            marketTrend: marketTrend
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};