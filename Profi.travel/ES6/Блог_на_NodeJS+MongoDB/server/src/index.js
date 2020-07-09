import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import PostController from './controllers/PostController';

import PostModel from './models/Post';
const Post = new PostController();

const app = express(); //Создаем приложение - express 
mongoose.connect('mongodb://localhost/blog'); //Подключение к серверу и указывание
//конкретной БД.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/posts', Post.index);
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

// LAUNCH OUR SERVER START //
app.listen(3333, () => { //Порт указывается произвольно 
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