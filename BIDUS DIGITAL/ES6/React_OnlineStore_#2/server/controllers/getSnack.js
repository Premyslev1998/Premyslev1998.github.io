const snackData = require('../models/snackFunc');

class Fetch {

    static async getAll(req, res) {
        const snack = await snackData.getAll();
        res.send(snack);
    }

    static async create(req, res) {
        const snack = await snackData.create(req.body);
        res.send(snack);
    }

}

module.exports = Fetch;