const pizzaData = require('../models/pizzaFunc');

class Fetch {

    static async getAll(req, res) {
        const pizza = await pizzaData.getAll();
        res.send(pizza);
    }

    static async create(req, res) {
        const pizza = await pizzaData.create(req.body);
        res.send(pizza);
    }

}

module.exports = Fetch;