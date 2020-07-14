const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
    id: Schema.Types.ObjectId,
    img: String,
    type: [{
       id: Schema.Types.ObjectId,
       name: String,
       size: String,
       price: Number,
       description: String
    }]
});

mongoose.model('pizzas', PizzaSchema); // Разные коллекции
module.exports = mongoose.model('pizzas');