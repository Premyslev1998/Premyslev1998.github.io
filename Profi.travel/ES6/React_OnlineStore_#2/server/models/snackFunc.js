const snack = require('../models/schema/snack');

class Place {

    static async getAll () {
        return snack.find().catch(err => console.log(err));
    }

    static async create(postObject) {
        let snackPost = new snack({
            name: postObject.name,
            price: postObject.price,
            size: postObject.size,
            img: postObject.img,
            description: postObject.description,
        });
        snackPost.save(err => console.log(err));
        return snackPost;
    }

}

module.exports = Place;