const pizza = require('../models/schema/pizza');

class Place {

    static async getAll () {
        return pizza.find().catch(err => console.log(err));
    }

    static async create(postObject) {
        let newPost = new pizza({
            img: postObject.img,
            type: postObject.type,
        });
        newPost.save(err => console.log(err));
        return newPost;
    }

}

module.exports = Place;