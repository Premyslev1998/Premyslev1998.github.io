const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const SnackSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    img: String,
    size: String,
    price: Number,
    description: String,
});

mongoose.model('snacks', SnackSchema);
module.exports = mongoose.model('snacks');