const basket = require('../models/schema/basket');

class Place {

    static async addOrder(order) {
        let newOrder = new basket({
            name: order.name,
            email: order.email,
            telephone: order.telephone,
            order: order.order,
        });
        newOrder.save(err => console.log(err));
        return newOrder;
    }

}

module.exports = Place;