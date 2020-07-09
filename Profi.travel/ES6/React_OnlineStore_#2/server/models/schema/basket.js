const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    email: String,
    telephone: String,
    time: {type: Date, default: Date.now},
    order: [{
        id: String,
        count: Number,
        name: String,
        price: Number,
        size: String
    }]
});

mongoose.model('baskets', BasketSchema);
module.exports = mongoose.model('baskets');