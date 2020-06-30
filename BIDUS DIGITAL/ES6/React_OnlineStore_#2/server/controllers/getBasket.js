const basketData = require('../models/basketFunc');

class Fetch {

    static async addBasket(req, res) {
        const basket = await basketData.addOrder(req.body);
        res.send(basket);
    }

}

module.exports = Fetch;