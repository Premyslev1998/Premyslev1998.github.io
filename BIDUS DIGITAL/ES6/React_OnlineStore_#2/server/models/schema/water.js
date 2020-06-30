const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const WaterSchema = new Schema({
    id: Schema.Types.ObjectId,
    img: String,
    name: String,
    price: Number,
    size: String,
});

mongoose.model('waters', WaterSchema); // Разные коллекции
module.exports = mongoose.model('waters');