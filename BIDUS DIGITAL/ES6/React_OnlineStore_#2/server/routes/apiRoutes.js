const pizzaController = require('../controllers/getPizza');
const basketController = require('../controllers/getBasket');
const snackController = require('../controllers/getSnack');
const waterController = require('../controllers/getWater');

module.exports = (server) => {
    server.get('/api/pizza', async(req, res) => await pizzaController.getAll(req, res));
    server.get('/api/snack', async(req, res) => await snackController.getAll(req, res));
    server.get('/api/water', async(req, res) => await waterController.getAll(req, res));
    server.post('/api/basket', async(req, res) => await basketController.addBasket(req, res));

    server.get('/api/ping', function (req, res) {
        res.send('API is running');
    });
};