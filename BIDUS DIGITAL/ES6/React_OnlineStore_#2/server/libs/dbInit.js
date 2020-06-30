const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pomelov:Sergey123!@pomelov-7apwp.azure.mongodb.net/podbereg')
    .catch(err => console.error(err));

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;


