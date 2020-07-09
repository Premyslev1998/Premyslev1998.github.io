const water = require('../models/schema/water');

class Place {

    static async getAll () {
        return water.find().catch(err => console.log(err));
    }

    static async create(postObject) {
        let newWater = new water({
            img: postObject.img,
            name: postObject.name,
            price: postObject.price,
            size: postObject.size,
        });
        newWater.save(err => console.log(err));
        return newWater;
    }

}

module.exports = Place;