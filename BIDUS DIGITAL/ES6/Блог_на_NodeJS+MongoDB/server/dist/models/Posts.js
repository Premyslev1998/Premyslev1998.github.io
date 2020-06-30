'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongose = require('mongose');

var _mongose2 = _interopRequireDefault(_mongose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostSchema = new _mongose.Schema({
	title: String,
	text: String
}, {
	timestamps: true
});

var Post = _mongose2.default.model('Post', PostSchema);

exports.default = Post;