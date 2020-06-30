const waterData = require('../models/waterFunc');

class Fetch {

    static async getAll(req, res) {
        const water = await waterData.getAll();
        res.send(water);
    }

    static async create(req, res) {
        const water = await waterData.create(req.body);
        res.send(water);
    }

}

module.exports = Fetch;