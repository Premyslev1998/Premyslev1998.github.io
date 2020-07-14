'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _PostController = require('./controllers/PostController');

var _PostController2 = _interopRequireDefault(_PostController);

var _Post = require('./models/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = new _PostController2.default();

var app = (0, _express2.default)(); //Создаем приложение - express 
_mongoose2.default.connect('mongodb://localhost/blog'); //Подключение к серверу и указывание
//конкретной БД.
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.get('/posts', Post.index);
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

// LAUNCH OUR SERVER START //
app.listen(3333, function () {
	//Порт указывается произвольно 
	console.log('SERVER_STARTED!');
});
// LAUNCH OUR SERVER END //

/*
// THE FIRST TRIAL RECORDING START //
const post = new PostModel({
	title: 'Первая запись',
	text: 'Hello, World!'
});

//Ниже мы сохраняем запись, путем обращения к 
//св-ву - save, которая в свою очередь возвращает - Promise.
post.save().then(() => {
	console.log('OK!');
});
// THE FIRST TRIAL RECORDING END //
*/